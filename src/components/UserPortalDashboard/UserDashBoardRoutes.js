import React from "react";
import ChangePassword from '../UserDashBoardComponent/UserCPComponent';
import AddToCart from '../UserDashBoardComponent/MyOrderComponent';
import UserProfile from '../UserDashBoardComponent/UserProfileComponent';
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