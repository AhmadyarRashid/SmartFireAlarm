import React, {Component} from 'react';
import {userQuery} from '../../middleWare/userFunctions';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNo: '',
            email: '',
            message: '',
            error: ''
        }
    }

    contactHandler = () => {
        if (this.state.name.trim() == '' || this.state.email.trim() == '' || this.state.message.trim == '') {
            console.log(this.state);
            this.setState({
                error: 'Some field are empty'
            })

        } else {
            userQuery({
                    name: this.state.name,
                    email: this.state.email,
                    phoneNo: this.state.phoneNo,
                    message: this.state.message
                }
            )
                .then(res => {
                    if (res.con == 'OK') {
                        this.setState({
                            error: 'Query Submitted Sucessfully'
                        })

                        setTimeout(() => {
                            this.setState(() => ({
                                name: '',
                                phoneNo: '',
                                email: '',
                                message: '',
                                error: ''
                            }));
                        }, 1000)
                    }
                })
        }
    }

    changeName = (e) => {
        var name = e.target.value;
        this.setState({
            name
        })
    }

    changeEmail = (e) => {
        var email = e.target.value;
        this.setState({
            email
        })
    }

    changePhoneNo = (e) => {
        var phoneNo = e.target.value;
        this.setState({
            phoneNo
        })
    }

    changeMessage = (e) => {
        var message = e.target.value;
        this.setState({
            message
        })
    }

    render() {
        return (
            <div>
                <section id="contact" style={{backgroundImage: `url(${'./images/map-image.png'})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contact Us</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="contactForm"  name="sentMessage"
                                      noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text"
                                                       placeholder="Your Name *" required={true}
                                                       onChange={this.changeName}
                                                       value={this.state.name}
                                                       data-validation-required-message="Please enter your name."/>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email"
                                                       placeholder="Your Email *" required={true}
                                                       onChange={this.changeEmail}
                                                       value={this.state.email}
                                                       data-validation-required-message="Please enter your email address."/>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="phone" type="tel"
                                                       placeholder="Your Phone *"
                                                       onChange={this.changePhoneNo}
                                                       value={this.state.phoneNo}
                                                       />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <textarea className="form-control" id="message" placeholder="Your Message *"
                                                      required={true}
                                                      onChange={this.changeMessage}
                                                      value={this.state.message}
                                                      data-validation-required-message="Please enter a message."></textarea>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        {!!this.state.error && <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <center>
                                                <p className='text-warning'>{this.state.error}</p>
                                            </center>

                                        </div>
                                        }
                                        <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <center>
                                                <button id="sendMessageButton"
                                                        onClick={this.contactHandler}
                                                        className="btn btn-xl text-uppercase home-btn bg-dark"
                                                        style={{ color: 'white'}}
                                                        >Send Message
                                                </button>
                                            </center>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}
