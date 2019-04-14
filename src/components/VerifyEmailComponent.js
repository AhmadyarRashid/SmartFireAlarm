import React, {Component} from 'react';
import SimpleNavigation from './Home/SimpleNavigationComponent';
import {verifyEmail, confirmResetUser} from '../middleWare/userFunctions';
import {NavLink} from "react-router-dom";

class VerifyEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            response: ''
        };
    }

    componentWillMount() {
        confirmResetUser({
            id: this.props.match.params.id
        }).then(res => {
            if (res.response === 'error') {
                window.open('http://localhost:8080/','_self');
            } else {
                verifyEmail({id: this.props.match.params.id})
                    .then(res => {
                        if (res) {
                            alert('email verify sucessfully');
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return (
            <div>
                <SimpleNavigation/>
                <div className="container" style={{width: 500}}>
                    <h2>Thanks for you to verify Email.</h2>
                </div>
            </div>
        );
    }
}

export default VerifyEmail;