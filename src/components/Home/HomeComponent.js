import React, {Component} from 'react';
import Navigation from './NavigationComponent';
import HeaderHome from './HeaderHomeComponent';
import Services from './ServicesComponent';
import Products from './ProductsComponent';
import About from './AboutComponent';
import Team from './TeamComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import {NavLink, Redirect} from 'react-router-dom';
import {
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
import {addCart} from '../../actions/cart';
import {localToRedux} from '../../actions/UserAuthenticate';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            hubQty: 1,
            hubAmount: 1200,
            slaveQty: 1,
            slaveAmount: 600,
            error: '',
            auth: {}
        }
    }

    HubProductHandler = () => {

        if (Number(this.state.hubQty) > 0) {
            this.setState(({
                error: ''
            }));
            this.props.dispatch(addCart({
                deviceId: 1,
                deviceName: this.props.deviceName1,
                deviceDescription: this.props.deviceDescription1,
                image: this.props.deviceImage1,
                unitPrice: this.props.unitPrice1,
                quantity: this.state.hubQty,
                amount: this.state.hubAmount
            }));

            localStorage.setItem("cart", JSON.stringify(this.props.cart));

            this.toggleModal();
        } else {
            this.setState(({
                error: 'Please Enter Quantity!'
            }));
        }

        console.log(this.props.cart);

    }

    SlaveProductHandler = () => {

        if (Number(this.state.slaveQty > 0)) {
            this.setState(({
                error: ''
            }));
            this.props.dispatch(addCart({
                deviceId: 2,
                deviceName: this.props.deviceName2,
                deviceDescription: this.props.deviceDescription2,
                image: this.props.deviceImage2,
                unitPrice: this.props.unitPrice2,
                quantity: this.state.slaveQty,
                amount: this.state.slaveAmount
            }))
            console.log(this.props.cart);

            localStorage.setItem("cart", JSON.stringify(this.props.cart));
            this.toggleModal();

        } else {
            this.setState(({
                error: 'Please Enter Quantity!'
            }));
        }


    }

    componentWillMount() {
        try {
            var user = localStorage.getItem('userAuth');
            user = JSON.parse(user);
            this.props.dispatch(localToRedux({
                email: user.email,
                password: user.password,
                isAuth: user.isAuth,
                userName: user.userName,
                phoneNo: user.phoneNo,
                address: user.address
            }));

        } catch (e) {
            console.log(e);
        }
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

    toggleBuyModal = () => {
        this.setState((preStat) => ({
            showModal: !preStat.showModal,
            hubQty: 1,
            hubAmount: 1200,
            slaveQty: 1,
            slaveAmount: 600
        }));
        setTimeout(() => {
            window.open('http://localhost:8080/showCart', '_self');
        }, 750);

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
        const BuyHUBbtnHandler = () => {
            console.log('============= buy button clicked ==============');
            if (Number(this.state.hubQty) > 0) {
                this.setState(({
                    error: ''
                }));
                this.props.dispatch(addCart({
                    deviceId: 1,
                    deviceName: this.props.deviceName1,
                    deviceDescription: this.props.deviceDescription1,
                    image: this.props.deviceImage1,
                    unitPrice: this.props.unitPrice1,
                    quantity: this.state.hubQty,
                    amount: this.state.hubAmount
                }));

                localStorage.setItem("cart", JSON.stringify(this.props.cart));
                window.open('http://localhost:8080/showCart', '_self');
            } else {
                this.setState(({
                    error: 'Please Enter Quantity!'
                }));
            }

            console.log(this.props.cart);

        }

        const BuySLAVEbtnHandler = () => {
            console.log('============= buy button clicked ==============');
            if (Number(this.state.slaveQty > 0)) {
                this.setState(({
                    error: ''
                }));
                this.props.dispatch(addCart({
                    deviceId: 2,
                    deviceName: this.props.deviceName2,
                    deviceDescription: this.props.deviceDescription2,
                    image: this.props.deviceImage2,
                    unitPrice: this.props.unitPrice2,
                    quantity: this.state.slaveQty,
                    amount: this.state.slaveAmount
                }))
                console.log(this.props.cart);

                localStorage.setItem("cart", JSON.stringify(this.props.cart));

                window.open('http://localhost:8080/showCart', '_self');
            } else {
                this.setState(({
                    error: 'Please Enter Quantity!'
                }));
            }


        }

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
                                                    {
                                                        !!this.state.error &&
                                                        <p className='text-danger'>{this.state.error}</p>
                                                    }
                                                    <div className='row'>
                                                        <div className='col-12'>
                                                            <center>
                                                                <Button
                                                                    onClick={() => BuyHUBbtnHandler()}
                                                                    type="button"
                                                                    data-dismiss="modal"
                                                                    className='btn btn-primary btn-lg'>
                                                                    Buy Now
                                                                </Button>
                                                                {' '}
                                                                <Button type="button" onClick={this.HubProductHandler}
                                                                        className='btn btn-primary btn-lg'>
                                                                    Add To Cart
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
                                                    <h3 className="text-uppercase" style={{marginTop: -80}}>SLAVE
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
                                                    {
                                                        !!this.state.error &&
                                                        <p className='text-danger'>{this.state.error}</p>
                                                    }
                                                    <div className='row'>
                                                        <div className='col-12'>
                                                            <center>
                                                                <NavLink to='/showCart'>
                                                                    <Button
                                                                        onClick={() => BuySLAVEbtnHandler()}
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
                        <Button className='btn btn-primary' onClick={this.toggleBuyModal}>Buy
                            Now</Button>{' '}
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


Home.defaultProps = {
    deviceName1: 'HUB Device',
    deviceDescription1: 'Auto generate call and notify to user',
    deviceImage1: 'http://localhost:8080/images/portfolio/01-thumbnail.jpg',
    unitPrice1: 1200,
    deviceName2: 'Slave Device',
    deviceDescription2: 'send health to server and hub device',
    deviceImage2: 'http://localhost:8080/images/portfolio/01-thumbnail.jpg',
    unitPrice2: 600
};
export default connect(mapStatToProps)(Home);