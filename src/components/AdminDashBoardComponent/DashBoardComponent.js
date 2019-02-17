import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from '../AdminDashboard/SimpleLineChart';
import SimpleTable from '../AdminDashboard//SimpleTable';


class DashBoardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" gutterBottom component="h2">
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