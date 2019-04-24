import React , {Component} from 'react';

export default class Team extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section className="bg-light" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="./images/team/1.jpg" alt=""/>
                                <h4>Muhammad Jasim</h4>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/jasim.awan.9">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="./images/team/2.jpg" alt=""/>
                                <h4>Ahmad Yar Rashid</h4>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/ahmadyar.meo">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}