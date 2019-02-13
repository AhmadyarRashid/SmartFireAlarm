import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';

const products = [
    {name: 'Product 1', desc: 'A nice thing', price: '$9.99'},
    {name: 'Product 2', desc: 'Another thing', price: '$3.45'},
    {name: 'Shipping', desc: '', price: 'Free'},
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    {name: 'Card type', detail: 'Visa'},
    {name: 'Card holder', detail: 'Mr John Smith'},
    {name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234'},
    {name: 'Expiry date', detail: '04/2024'},
];

const styles = theme => ({
    listItem: {
        padding: `${theme.spacing.unit}px 0`,
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing.unit * 2,
    },
});

class Review extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        const renderTotalAmount = () => {
            var amount = 0;
            this.props.cart.forEach(item => {
                amount += Number(item.amount);
            })
            return amount;
        }

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Order summary
                </Typography>
                <List disablePadding>
                    {this.props.cart.map(item => (
                        <ListItem className={classes.listItem} key={item.deviceName}>
                            <ListItemText primary={item.deviceName} secondary={item.deviceDescription}/>
                            <Typography variant="body2">{item.amount}</Typography>
                        </ListItem>
                    ))}
                    <ListItem className={classes.listItem}>
                        <ListItemText primary="Total"/>
                        <Typography variant="subtitle1" className={classes.total}>
                            {renderTotalAmount()}
                        </Typography>
                    </ListItem>
                </List>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom className={classes.title}>
                            Shipping
                        </Typography>
                        <Typography gutterBottom>John Smith</Typography>
                        <Typography gutterBottom>{addresses.join(', ')}</Typography>
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom className={classes.title}>
                            Payment details
                        </Typography>
                        <Grid container>
                            {payments.map(payment => (
                                <React.Fragment key={payment.name}>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{payment.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{payment.detail}</Typography>
                                    </Grid>
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );

    }


}

Review.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStatToProps = state => ({
    userAuth: state.userAuth,
    cart: state.cart
});

export default connect(mapStatToProps)(withStyles(styles)(Review));