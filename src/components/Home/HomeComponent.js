import React, {Component} from 'react';
import Navigation from './NavigationComponent';
import HeaderHome from './HeaderHomeComponent';
import Services from './ServicesComponent';
import Products from './ProductsComponent';
import About from './AboutComponent';
import Team from './TeamComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import {NavLink} from 'react-router-dom';
import {
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    FormGroup,
    Label,
    Col,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {connect} from 'react-redux';
import {addCart} from '../../actions/addToCart';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            hubQty: 1,
            hubAmount: 1200,
            slaveQty: 1,
            slaveAmount: 600
        }
    }

    HubProductHandler = () => {

        this.props.dispatch(addCart({deviceId: 1, quantity: this.state.hubQty, amount: this.state.hubAmount}))
        console.log(this.props.cart);
        this.toggleModal();
    }

    SlaveProductHandler = () => {

        this.props.dispatch(addCart({deviceId: 2, quantity: this.state.slaveQty, amount: this.state.slaveAmount}))
        console.log(this.props.cart);
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState((preStat) => ({
            showModal: !preStat.showModal,
            hubQty: 1,
            hubAmount: 1200,
            slaveQty: 1,
            slaveAmount: 600
        }));
    }

    changeHubQty = (event) => {
        var hubQty = Number(event.target.value);
        var hubAmount = 1200 * Number(hubQty);
        this.setState(() => ({
            hubQty,
            hubAmount
        }));
    }

    changeSlaveQty = (event) => {
        var slaveQty = Number(event.target.value);
        var slaveAmount = 600 * Number(slaveQty);
        this.setState(() => ({
            slaveQty,
            slaveAmount
        }));
    }

    render() {
        return (
            <div id="page-top">

                <Navigation/>
                <HeaderHome/>
                <Services/>
                <Products/>
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
                                                    <h3 className="text-uppercase" style={{marginTop: -80}}>HUB
                                                        Device</h3>
                                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet
                                                        consectetur.</p>
                                                    <img className="img-fluid d-block mx-auto"
                                                         src="http://localhost:8080/images/portfolio/01-full.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className='col' style={{marginTop: 20}}>
                                                    <p>Use this area to describe your project. Lorem ipsum dolor sit
                                                        amet,
                                                        consectetur adipisicing elit. Est blanditiis dolorem culpa
                                                        incidunt
                                                    </p>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>Shipping:</Label>
                                                        <Col sm={10}>
                                                            <p>Free Shipping in Pakistan Estimated Delivery
                                                                Time:23-40days</p>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>QTY:</Label>
                                                        <Col sm={10}>
                                                            <Input type="number"
                                                                   onChange={event => this.changeHubQty(event)}
                                                                   value={this.state.hubQty}/>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>AMT: </Label>
                                                        <Col sm={10}>
                                                            <Input type="number" disabled={true}
                                                                   value={this.state.hubAmount}/>
                                                        </Col>
                                                    </FormGroup>
                                                    <div className='row'>
                                                        <div className='col-12'>
                                                            <center>
                                                                <NavLink to='/showCart'>
                                                                    <Button type="button"
                                                                            data-dismiss="modal"
                                                                            className='btn btn-primary btn-lg'>
                                                                        Buy Now
                                                                    </Button>
                                                                </NavLink>
                                                                {' '}
                                                                <Button type="button" onClick={this.HubProductHandler}
                                                                        className='btn btn-primary btn-lg'>
                                                                    Add To Cart
                                                                </Button>
                                                                {' '}
                                                                <Button className="btn btn-primary btn-lg"
                                                                        data-dismiss="modal" type="button">
                                                                    Clear
                                                                </Button>
                                                            </center>
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
                                            <div className='row'>
                                                <div className='col'>
                                                    <h3 className="text-uppercase" style={{marginTop: -80}}>HUB
                                                        Device</h3>
                                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet
                                                        consectetur.</p>
                                                    <img className="img-fluid d-block mx-auto"
                                                         src="http://localhost:8080/images/portfolio/01-full.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className='col' style={{marginTop: 20}}>
                                                    <p>Use this area to describe your project. Lorem ipsum dolor sit
                                                        amet,
                                                        consectetur adipisicing elit. Est blanditiis dolorem culpa
                                                        incidunt
                                                    </p>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>Shipping:</Label>
                                                        <Col sm={10}>
                                                            <p>Free Shipping in Pakistan Estimated Delivery
                                                                Time:23-40days</p>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>QTY:</Label>
                                                        <Col sm={10}>
                                                            <Input type="number"
                                                                   onChange={event => this.changeSlaveQty(event)}
                                                                   value={this.state.slaveQty}/>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>AMT: </Label>
                                                        <Col sm={10}>
                                                            <Input type="number" disabled={true}
                                                                   value={this.state.slaveAmount}/>
                                                        </Col>
                                                    </FormGroup>
                                                    <div className='row'>
                                                        <div className='col-12'>
                                                            <center>
                                                                <NavLink to='/showCart'>
                                                                    <Button
                                                                        type="button"
                                                                        data-dismiss="modal"
                                                                        className='btn btn-primary btn-lg'>
                                                                        Buy Now
                                                                    </Button>
                                                                </NavLink>
                                                                {' '}
                                                                <Button
                                                                    type="button"
                                                                    onClick={this.SlaveProductHandler}
                                                                    className='btn btn-primary btn-lg'>
                                                                    Add To Cart
                                                                </Button>
                                                                {' '}
                                                                <Button
                                                                    className="btn btn-primary btn-lg"
                                                                    data-dismiss="modal"
                                                                    type="button">
                                                                    Clear
                                                                </Button>
                                                            </center>
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
                </div>


                {/*Modal*/}
                <Modal isOpen={this.state.showModal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Confirmation</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <NavLink to='\showCart' className='btn btn-primary' onClick={this.toggleModal}>Buy Now</NavLink>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Continue Shopping</Button>
                    </ModalFooter>
                </Modal>


            </div>
        );
    }
}

const mapStatToProps = state => ({
    userAuth: state.userAuth,
    cart: state.cart
})
export default connect(mapStatToProps)(Home);