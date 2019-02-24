import React, {Component} from 'react';

export default class Portfolio extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Products</h2>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="./images/portfolio/04-thumbnail.jpg" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>Hub Devices</h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="./images/portfolio/02-thumbnail.jpg" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>Slave Devices</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}