import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {NavLink, Link} from 'react-router-dom';

export const mainListItems = (
    <div>
        <NavLink to='/admin/dashboard'>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
        </NavLink>
        <NavLink to='/admin/addInventory'>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon/>
                </ListItemIcon>
                <ListItemText primary="Inventory"/>
            </ListItem>
        </NavLink>
        <NavLink to='/admin/devices'>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon/>
                </ListItemIcon>
                <ListItemText primary="Devices"/>
            </ListItem>
        </NavLink>
        <NavLink to='/admin/customer'>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Customers"/>
            </ListItem>
        </NavLink>
        <NavLink to='/admin/sales'>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Sales Details"/>
            </ListItem>
        </NavLink>
        <NavLink to='/admin/complains'>
            <ListItem button>
                <ListItemIcon>
                    <i className='fas fa fa-exclamation-triangle'></i>
                    {/*<BarChartIcon/>*/}
                </ListItemIcon>
                <ListItemText primary="Customer Complains"/>
            </ListItem>
        </NavLink>
        <NavLink to='/admin/serviceReport'>
            <ListItem button>
                <ListItemIcon>
                    <i className='fas fa fa-exclamation-triangle'></i>
                    {/*<BarChartIcon/>*/}
                </ListItemIcon>
                <ListItemText primary="Service Complains"/>
            </ListItem>
        </NavLink>
        <NavLink to='/admin/query'>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Customer Query"/>
            </ListItem>
        </NavLink>
        <NavLink to='/admin/changePass'>
            <ListItem button>
                <ListItemIcon>
                    {/*<LayersIcon/>*/}
                    <i className='fas fa fa-wrench'></i>

                </ListItemIcon>
                <ListItemText primary="ChangePassword"/>
            </ListItem>
        </NavLink>
        <ListItem onClick={() => {window.open("http://localhost:8080/admin","_self")}}>
            <ListItemIcon>
                {/*<LayersIcon/>*/}
                <i className="fas fa-fw fa-sign-out-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Signout"/>
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        {/*<ListSubheader inset>Saved reports</ListSubheader>*/}
        {/*<ListItem button>*/}
        {/*<ListItemIcon>*/}
        {/*<AssignmentIcon/>*/}
        {/*</ListItemIcon>*/}
        {/*<ListItemText primary="Current month"/>*/}
        {/*</ListItem>*/}
        {/*<ListItem button>*/}
        {/*<ListItemIcon>*/}
        {/*<AssignmentIcon/>*/}
        {/*</ListItemIcon>*/}
        {/*<ListItemText primary="Last quarter"/>*/}
        {/*</ListItem>*/}
        {/*<ListItem button>*/}
        {/*<ListItemIcon>*/}
        {/*<AssignmentIcon/>*/}
        {/*</ListItemIcon>*/}
        {/*<ListItemText primary="Year-end sale"/>*/}
        {/*</ListItem>*/}
    </div>
);