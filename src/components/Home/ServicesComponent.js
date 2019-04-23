import React, {Component} from 'react';

export default class Service extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h4 className="service-heading" >E-Commerce</h4>
                            <p className="text-muted">Smart Fire Alarm Systems are providing you with the a facility to
                            buy our devices via credit/debit card. Sign up and select your devices and buy it easily.
                            For any query contact us immediately.</p>
                        </div>
                        <div className="col-md-4">

                            <h4 className="service-heading">Android Application</h4>
                            <p className="text-muted">We are providing you with the Android application after you buy our devices,
                            So that you can monitor them easily and always. </p>
                        </div>
                        <div className="col-md-4">

                            <h4 className="service-heading">Smart Devices</h4>
                            <p className="text-muted">There are two types of devices you can get here.
                            Hub Device and Slave Device. They work separately and communicate with the android app. You can get further details by downloading
                            the Guide Book.</p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="service-heading">Guide Book</h4>
                            <a href='./Manual.pdf' className="text-muted">Download Now</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}