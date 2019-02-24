import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from '../AdminDashboard/SimpleLineChart';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import {getSummary} from '../../middleWare/sellerFunction';


class DashBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalHubs: 0,
            totalSlave: 0,
            totalOrders: 0,
            totalCustomer: 0
        }
    }

    componentWillMount() {
        getSummary({})
            .then(res => {
                if (res){
                    if(res.gs == 'OK'){
                        this.setState(() => ({
                           totalHubs: res.hub,
                           totalSlave: res.slave,
                           totalOrders: res.sale,
                           totalCustomer: res.user
                        }))
                    }
                    console.log(res);
                }
            })
            .catch(e => {
                console.log(e);
            })
    }


    render() {
        const {classes} = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>


                <div className='row'>
                    <div className='col '>
                        <Card className='text-white' style={{background: '#5d6d7e'}}>
                            <CardBody>
                                <CardTitle>Available HUB</CardTitle>
                                <CardText><h1>{this.state.totalHubs}</h1></CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='col'>
                        <Card className='text-white' style={{background: '#5d6d7e'}}>
                            <CardBody>
                                <CardTitle>Available SLAVE</CardTitle>
                                <CardText><h1>{this.state.totalSlave}</h1></CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='col'>
                        <Card className='text-white' style={{background: '#5d6d7e'}}>
                            <CardBody>
                                <CardTitle>SALES</CardTitle>
                                <CardText><h1>{this.state.totalOrders}</h1></CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='col'>
                        <Card className='text-white' style={{background: '#5d6d7e'}}>
                            <CardBody>
                                <CardTitle>CUSTOMERS</CardTitle>
                                <CardText><h1>{this.state.totalCustomer}</h1></CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>


                <Typography variant="h4" gutterBottom component="h2" style={{marginTop: 5}}>
                    Orders
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <SimpleLineChart/>
                </Typography>
            </main>
        )
    }
}

DashBoardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },

});

export default withStyles(styles)(DashBoardComponent);