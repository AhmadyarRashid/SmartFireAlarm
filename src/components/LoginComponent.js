import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="masthead-login"
                    style={{padding: 0, backgroundImage: `url(${'./images/header-bg.jpg'})`}}>
                <div className="container">

                    <div className='row' style={{width: '100%', height: '100%'}}>
                        <div className='col-md-4 intro-text-login'>
                            <div className="intro-heading-login text-uppercase">Smart Fire Alarm System</div>
                            <div className="intro-lead-in-login">Welcome in the Future</div>

                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <div className='intro-text-login'>
                                <div className="intro-lead-in-login">Login</div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Email</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username"
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Password</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username"
                                           aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3" align="right">
                                   <button className='btn btn-lg btn-primary form-control'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
    }
    }