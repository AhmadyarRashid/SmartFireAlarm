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

    contactHandler = (e) => {
        e.preventDefault();
        if (this.state.name.trim() !== '' || this.state.email.trim() !== '' || this.state.message.trim !== '') {
            console.log(this.state);

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
        } else {
            this.setState({
                error: 'Some field are empty'
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
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid d-block mx-auto" src="./images/logos/envato.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid d-block mx-auto" src="./images/logos/designmodo.jpg"
                                         alt=""/>
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid d-block mx-auto" src="./images/logos/themeforest.jpg"
                                         alt=""/>
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid d-block mx-auto" src="./images/logos/creative-market.jpg"
                                         alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" style={{backgroundImage: `url(${'./images/map-image.png'})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contact Us</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet
                                    consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="contactForm" onSubmit={this.contactHandler} name="sentMessage"
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
                                                       placeholder="Your Phone *" required="required"
                                                       onChange={this.changePhoneNo}
                                                       value={this.state.phoneNo}
                                                       data-validation-required-message="Please enter your phone number."/>
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
                                                        type='submit'
                                                        className="btn btn-primary btn-xl text-uppercase home-btn"
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
