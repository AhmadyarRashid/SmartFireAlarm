console.log('starting hoc page');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Description : {
            props.info
        }</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is warning message not share it</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ?
                    <WrappedComponent {...props}/> :
                    "please login"
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="this is some detail"/> , document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is some detail"/> , document.getElementById('app'));
