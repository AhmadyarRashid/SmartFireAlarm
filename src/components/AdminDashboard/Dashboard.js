import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {mainListItems, secondaryListItems} from './listItems';
import DashBoardComponent from '../AdminDashBoardComponent/DashBoardComponent';
import CustomerComponent from '../AdminDashBoardComponent/CustomerComponent';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddInventory from '../AdminDashBoardComponent/AddInventoryComponent';
import Complains from '../AdminDashBoardComponent/ComplainComponent';
import Query from '../AdminDashBoardComponent/UserQueryComponent';
import Devices from '../AdminDashBoardComponent/DeviceMonitComponent';
import {getUser, getAllQuery, getSales, getAllDevices, getAllServiceReport} from "../../middleWare/sellerFunction";
import {storeAllUser} from '../../actions/users';
import {storeAllQuery} from '../../actions/query';
import {storeAllSales} from '../../actions/sales';
import {storeAllDevices} from '../../actions/devices';
import {storeAllServiceReports} from '../../actions/serviceReports';
import {connect} from 'react-redux';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import SaleComponent from '../AdminDashBoardComponent/SaleComponent';
import ChangePass from '../AdminDashBoardComponent/AdminChangePass';
import ServiceReport from '../AdminDashBoardComponent/ServiceReportComponent';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5D6D7E',
        },
        secondary: {
            main: '#FFFFFF'
        }
    }
});

const drawerWidth = 240;

class Dashboard extends React.Component {
    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    componentWillMount() {
        getUser({})
            .then(res => {
                if (res.gu === 'OK') {
                   // console.log('doc ============\n', res.doc);
                    this.props.dispatch(storeAllUser(res.doc));
                } else {
                    console.log('No User Exists');
                }
            }).catch(e => {
            console.log('Some Network Error', e);
        });

        getAllQuery({})
            .then(res => {
                if (res.gaq === 'OK') {
                    this.props.dispatch(storeAllQuery(res.doc));
                }
            })
            .catch(e => {
                console.log(e);
            });

        getSales({})
            .then(res => {
                if (res.gs === 'OK') {
                   // console.log('get all sale details', res.doc);
                    this.props.dispatch(storeAllSales(res.doc));
                } else {
                    console.log('no sales found');
                }
            })
            .catch(e => {
                console.log(e);
            })

        getAllDevices({})
            .then(res => {
                console.log('======= devices =======' , res);

                if (res.gad === 'OK'){
                    console.log('get all sale details', res.doc);
                    this.props.dispatch(storeAllDevices(res.doc));
                }else {
                    console.log('no devices found');
                }
            });

        getAllServiceReport({})
            .then(res => {
                console.log('========= service reports =======' , res);
                if (res.gasr === 'OK'){
                    this.props.dispatch(storeAllServiceReports(res.doc));
                }
            })
            .catch(e => {
                console.log(e);
            });

    }

    render() {
        const {classes} = this.props;

        if (this.props.adminAuth.isAuth == false) {
            window.open('http://localhost:8080/admin', '_self');
        } else {
            return (
                <MuiThemeProvider theme={theme}>
                    <BrowserRouter>

                        <div className={classes.root}>
                            <CssBaseline/>
                            <AppBar
                                position="absolute"
                                className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                            >
                                <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                                    <IconButton
                                        color="inherit"
                                        aria-label="Open drawer"
                                        onClick={this.handleDrawerOpen}
                                        className={classNames(
                                            classes.menuButton,
                                            this.state.open && classes.menuButtonHidden,
                                        )}
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                    <Typography
                                        component="h1"
                                        variant="h6"
                                        color="inherit"
                                        noWrap
                                        className={classes.title}
                                    >
                                        Dashboard
                                    </Typography>
                                    <IconButton color="inherit">
                                        {/*<Badge badgeContent={4} color="secondary">*/}
                                        {/*/!*<NotificationsIcon/>*!/*/}
                                        {/*</Badge>*/}
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            <Drawer
                                variant="permanent"
                                classes={{
                                    paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                                }}
                                open={this.state.open}
                            >
                                <div className={classes.toolbarIcon}>
                                    <IconButton onClick={this.handleDrawerClose}>
                                        <ChevronLeftIcon/>
                                    </IconButton>
                                </div>
                                <Divider/>
                                <List>{mainListItems}</List>
                                <Divider/>
                                <List>{secondaryListItems}</List>
                            </Drawer>

                            <Switch>
                                <Route path='/admin/dashboard' exact={true} component={DashBoardComponent}/>
                                <Route path='/admin/addInventory' component={AddInventory}/>
                                <Route path='/admin/devices' component={Devices}/>
                                <Route path='/admin/customer' component={CustomerComponent}/>
                                <Route path='/admin/complains' component={Complains}/>
                                <Route path='/admin/serviceReport' component={ServiceReport}/>
                                <Route path='/admin/query' component={Query}/>
                                <Route path='/admin/changePass' component={ChangePass}/>
                                <Route path='/admin/sales' component={SaleComponent}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </MuiThemeProvider>
            );
        }

    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
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

const mapStatToProps = state => ({
    adminAuth: state.adminAuth
})

export default connect(mapStatToProps)(withStyles(styles)(Dashboard));