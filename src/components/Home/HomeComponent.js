import React, {Component} from 'react';
import Navigation from './NavigationComponent';
import HeaderHome from './HeaderHomeComponent';
import Services from './ServicesComponent';
import Portfolio from './PortfolioComponent';
import About from './AboutComponent';
import Team from './TeamComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="page-top">

                <Navigation/>
                <HeaderHome/>
                <Services/>
                <Portfolio/>
                <About/>
                <Team/>
                <Contact/>
                <Footer/>

                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-dismiss="modal">
                                <div className="lr">
                                    <div className="rl"></div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="modal-body">
                                            <div className='row'>
                                                <div className='col'>
                                                    <h2 className="text-uppercase">Project Name</h2>
                                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet
                                                        consectetur.</p>
                                                    <img className="img-fluid d-block mx-auto"
                                                         src="./images/portfolio/01-full.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className='col' style={{marginTop: 200}}>
                                                    <p>Use this area to describe your project. Lorem ipsum dolor sit
                                                        amet,
                                                        consectetur adipisicing elit. Est blanditiis dolorem culpa
                                                        incidunt
                                                        minus dignissimos deserunt repellat aperiam quasi sunt officia
                                                        expedita
                                                        beatae cupiditate, maiores repudiandae, nostrum, reiciendis
                                                        facere
                                                        nemo!</p>
                                                    <div className="form-group">
                                                        Quantity:
                                                        <input className="form-control" id="phone" type="number"
                                                               placeholder="Quantity" required="required"
                                                               data-validation-required-message="Quantity"/>
                                                    </div>
                                                    <div>
                                                        Price:
                                                        <p>$15</p>
                                                    </div>
                                                    <div className='row'>
                                                        <button type="button" className='btn btn-primary home-product'>
                                                            Add To Cart
                                                        </button>
                                                        &nbsp;&nbsp;
                                                        <button type="button" className='btn btn-primary home-product'>
                                                            Buy
                                                        </button>
                                                        &nbsp;&nbsp;
                                                        <button className="btn btn-primary home-product"
                                                                data-dismiss="modal" type="button">
                                                            Close Project
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-dismiss="modal">
                                <div className="lr">
                                    <div className="rl"></div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="modal-body">

                                            <h2 className="text-uppercase">Project Name</h2>
                                            <p className="item-intro text-muted">Lorem ipsum dolor sit amet
                                                consectetur.</p>
                                            <img className="img-fluid d-block mx-auto"
                                                 src="./images/portfolio/02-full.jpg"
                                                 alt=""/>
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
                                                minus dignissimos deserunt repellat aperiam quasi sunt officia
                                                expedita
                                                beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere
                                                nemo!</p>
                                            <ul className="list-inline">
                                                <li>Date: January 2017</li>
                                                <li>Client: Explore</li>
                                                <li>Category: Graphic Design</li>
                                            </ul>
                                            <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                <i className="fas fa-times"></i>
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;