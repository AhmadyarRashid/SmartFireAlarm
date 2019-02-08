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
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet
                                consectetur.</h3>
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
                                <h4>Threads</h4>
                                <p className="text-muted">Illustration</p>
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
                                <h4>Explore</h4>
                                <p className="text-muted">Graphic Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}