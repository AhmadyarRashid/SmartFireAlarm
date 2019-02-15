import React from "react";
import ChangePassword from '../DashBoardComponent/UserCPComponent';
import AddToCart from '../DashBoardComponent/MyOrderComponent';
import UserProfile from '../DashBoardComponent/UserProfileComponent';
import Payment from '../Payment/Checkout';

export const routes = [
    {
        path: "/userportal/",
        exact: true,
        main: () => <AddToCart/>
    },
    {
        path: "/userportal/changePassword",
        main: () => <ChangePassword/>
    },
    {
        path:'/userportal/profile',
        main: () => <UserProfile/>
    }
];