import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import {connect} from 'react-redux';
import {userSignOut} from "../../actions/UserAuthenticate";
import {lastUpdatedCart, clearCart} from "../../actions/cart";
import {addOrder} from '../../actions/myOrders';
import SimpleNavigation from '../Home/SimpleNavigationComponent';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {buyProduct} from '../../middleWare/userFunctions';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#A9A9A9',
        },
        secondary: {
            main: '#838383',
        }
    }
});

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
        color: 'white'
    },
});

const steps = ['Shipping address', 'Payment details', 'Review your order'];


class Checkout extends React.Component {
    state = {
        activeStep: 0,
        saleId: '',
        paymentComplete: false,
        bill: 0
    };

    paymentCompleteHandler = () => {
        console.log('payment button click sucessfully');
        this.setState({
            paymentComplete: true
        })
    };


    getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm/>;
            case 1:
                return <PaymentForm bill={this.state.bill} payCompleteSubmit={this.paymentCompleteHandler}/>;
            case 2:
                return <Review/>;
            default:
                throw new Error('Unknown step');
        }
    }

    handleNext = () => {

        if (this.state.activeStep === 0) {
            this.props.cart.forEach(item => {
                console.log('========items are =========', item);
                if (item.deviceId === 1) {
                    setTimeout(() => {
                        this.setState(preStat => ({
                           bill : preStat.bill + (Number(item.quantity) * 1200)
                        }));
                    } ,0);

                }
                if (item.deviceId === 2) {
                    setTimeout(() => {
                        this.setState(preStat => ({
                            bill : preStat.bill + (item.quantity * 600)
                        }))
                    } ,0);
                }
            });

            console.log(this.state.bill);
        }

        if (this.state.activeStep === 1) {
            console.log(this.state.bill)
        }


        if (this.state.activeStep === 2) {

            let hubQty = 0;
            let slaveQty = 0;
            let email = this.props.userAuth.email;
            let shipping = 200;
            this.props.cart.forEach(item => {
                console.log(item);
                if (item.deviceId === 1) {
                    hubQty = item.quantity
                }
                if (item.deviceId === 2) {
                    slaveQty = item.quantity
                }
            });
            buyProduct({email, hubQty, slaveQty, shipping}).then(res => {
                if (res.bp === 'OK') {
                    console.log('add to cart sucessfully', res);
                    let saleId = res.saleId;
                    this.setState(() => ({
                        saleId
                    }));
                } else {
                    console.log('some problem occurs');
                }
            }).catch(e => {
                console.log(e);
            })
            this.props.dispatch(addOrder(this.props.cart));
            setTimeout(() => {
                this.props.dispatch(clearCart());
                localStorage.removeItem('cart');
            }, 1500);
        }

        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));

    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    backHome = () => {
        window.open("http://localhost:8080", "_self")
    }

    componentWillMount() {
        if (this.props.cart.length == 0) {
            var cart = JSON.parse(localStorage.getItem('cart'));
            this.props.dispatch(lastUpdatedCart({updatedCart: cart}));
        }
    }

    render() {
        const {classes} = this.props;
        const {activeStep} = this.state;

        const SignOutHandler = () => {
            console.log('===============click on signOut Button==================');
            this.props.dispatch(userSignOut());
            try {
                localStorage.removeItem('userAuth');
                localStorage.removeItem('cart');
            } catch (e) {
                console.log(e);
            }
            window.open('http://localhost:8080/', '_self');
        }

        if (this.props.userAuth.isAuth == false) {
            window.open('http://localhost:8080/', '_self');
        } else {
            return (
                <MuiThemeProvider theme={theme}>
                    <div>
                        <SimpleNavigation/>
                        <React.Fragment>
                            <CssBaseline/>
                            <main className={classes.layout}>
                                <Paper className={classes.paper}>
                                    <Typography component="h1" variant="h4" align="center">
                                        Checkout
                                    </Typography>
                                    <Stepper activeStep={activeStep} className={classes.stepper}>
                                        {steps.map(label => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                    <React.Fragment>
                                        {activeStep === steps.length ? (
                                            <React.Fragment>
                                                <Typography variant="h5" gutterBottom>
                                                    Thank you for your order. Your order placed sucessfully.
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    Your order number
                                                    is {!!this.state.saleId ? this.state.saleId : '#2503496'}. We have
                                                    emailed your order
                                                    confirmation,
                                                    and
                                                    will
                                                    send you an update when your order has shipped.
                                                </Typography>

                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                {this.getStepContent(activeStep)}
                                                <div className={classes.buttons}>
                                                    {activeStep !== 0 && (
                                                        <Button onClick={this.handleBack} className={classes.button}>
                                                            Back
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        disabled={(this.state.activeStep === 1 && this.state.paymentComplete === false) ? true : false}
                                                        onClick={this.handleNext}
                                                        className={classes.button}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                                    </Button>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </React.Fragment>


                                </Paper>
                            </main>
                        </React.Fragment>
                    </div>
                </MuiThemeProvider>
            );
        }


    }
}

Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStatToProps = state => ({
    userAuth: state.userAuth,
    cart: state.cart,
    myOrder: state.myOrder
})

export default connect(mapStatToProps)(withStyles(styles)(Checkout));