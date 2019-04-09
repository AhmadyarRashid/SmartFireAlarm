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
import {addCart, lastUpdatedCart} from '../../actions/cart';
import {localToRedux} from '../../actions/UserAuthenticate';
import {storeAllMyOrders} from '../../actions/myOrders';
import {getProductQty, getUserOrders} from '../../middleWare/userFunctions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            hubQty: 0,
            hubAmount: 0,
            slaveQty: 0,
            slaveAmount: 0,
            error: '',
            maxHub: 0,
            maxSlave: 0
        }
    }

    HubProductHandler = () => {
        if (!this.props.userAuth.isAuth) {
            this.setState(({
                error: 'Please Login First!'
            }));
        } else {
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

        }
        console.log(this.props.cart);

    }

    SlaveProductHandler = () => {

        if (!this.props.userAuth.isAuth) {
            this.setState(({
                error: 'Please Login First!'
            }));
        } else {
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
    }

    componentWillMount() {
        try {
            var user = localStorage.getItem('userAuth');
            user = JSON.parse(user);
            console.log(JSON.stringify(user, null, 2));
            this.props.dispatch(localToRedux({
                id: user.id,
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

        try {
            if (this.props.cart.length == 0) {
                console.log(JSON.parse(localStorage.getItem('cart')));
                var cart = JSON.parse(localStorage.getItem('cart'));
                this.props.dispatch(lastUpdatedCart({updatedCart: cart}));
            }
        } catch (e) {
            console.log(e);
        }

        //console.log(this.props.userAuth);

        getProductQty({})
            .then(res => {
                if (res.gq == 'OK') {
                    console.log(res.doc);
                    res.doc.forEach(item => {

                        if (item._id == 'HUB') {
                            console.log(item);
                            var maxHub = item.count;
                            this.setState({
                                maxHub
                            })
                        }
                        if (item._id == 'SLAVE') {
                            console.log(item);
                            var maxSlave = item.count;
                            this.setState({
                                maxSlave
                            })
                        }
                    })
                } else {
                    console.log('No data found');
                }
            })
            .catch(e => {
                console.log(e);
            });

        getUserOrders({
            userId: this.props.userAuth.id
        }).then(res => {
            if (res.guo == 'OK') {
                this.props.dispatch(storeAllMyOrders(res.doc));
            } else {
                console.log('No Current Sales Found');
            }
        }).catch(e => {
            console.log(e);
        })


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
            //return <Redirect to='/showCart'/>
            window.open('http://localhost:8080/showCart', '_self');
        }, 750);

    }

    changeHubQty = (event) => {
        var hubQty = Math.round(Number(event.target.value));

        if (hubQty <= 0) {
            this.setState(() => ({
                hubQty: 0,
                hubAmount: 0
            }))

            if (this.state.maxHub == 0) {
                this.setState(() => ({
                    error: 'No Device Avalable in Stock'
                }))
            } else {
                this.setState(() => ({
                    error: ''
                }))
            }
        } else {
            if (hubQty <= this.state.maxHub) {
                var hubAmount = 1200 * Number(hubQty);
                this.setState(() => ({
                    hubQty,
                    hubAmount,
                    error: ''
                }));
            } else {
                this.setState(() => ({
                    hubQty: 0,
                    hubAmount: 0,
                    error: `Maximum ${this.state.maxHub} devices available in Stock`
                }));
            }
        }

    }

    changeSlaveQty = (event) => {
        var slaveQty = Math.round(Number(event.target.value));
        if (slaveQty <= 0) {
            if (this.state.maxSlave == 0) {
                this.setState(() => ({
                    slaveQty: 0,
                    slaveAmount: 0
                }))

                this.setState(() => ({
                    error: 'No Device Avalable in Stock'
                }))
            } else {
                this.setState(() => ({
                    error: ''
                }))
            }
        } else {
            if (slaveQty <= this.state.maxSlave) {
                var slaveAmount = 600 * Number(slaveQty);
                this.setState(() => ({
                    slaveQty,
                    slaveAmount,
                    error: ''
                }));
            } else {
                this.setState(() => ({
                    slaveQty: 0,
                    slaveAmount: 0,
                    error: `Maximum ${this.state.maxSlave} devices available in Stock`
                }));
            }
        }
    }

    render() {
        const BuyHUBbtnHandler = () => {
            if (!this.props.userAuth.isAuth) {
                this.setState(({
                    error: 'Please Login First!'
                }));
            } else {
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

            }
            console.log(this.props.cart);

        }

        const BuySLAVEbtnHandler = () => {

            console.log('=========== buy slave btn click ==============');
            console.log('hub quantity is ', this.state.slaveQty, typeof this.state.slaveQty);
            if (!this.props.userAuth.isAuth) {
                this.setState(({
                    error: 'Please Login First!'
                }));
            } else {
                console.log('============= user authenticate sucessfully ==============');
                if (this.state.slaveQty > 0) {
                    console.log('============= slave quantity is greater than 0 ==============');
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

        }

        const clearError = () => {
            this.setState({
                error: ''
            })
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
                            <div className="close-modal" onClick={clearError} data-dismiss="modal">
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

                                                    <img className="img-fluid d-block mx-auto"
                                                         src="http://localhost:8080/images/portfolio/04-thumbnail.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className='col' style={{marginTop: 0}}>
                                                    <h3 className="text-uppercase" style={{marginTop: 0}}>HUB
                                                        Device</h3>
                                                    <p>{this.props.deviceDescription1}
                                                    </p>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>Shipping:</Label>
                                                        <Col sm={10}>
                                                            <p>Rs 200 Shipping in Pakistan</p>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>QTY:</Label>
                                                        <Col sm={10}>
                                                            <Input type="number"
                                                                   onChange={event => this.changeHubQty(event)}
                                                                   min={0}
                                                                   value={this.state.hubQty}/>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>AMT: </Label>
                                                        <Col sm={10}>
                                                            <Input type="number"
                                                                   min={0}
                                                                   disabled={true}
                                                                   value={this.state.hubAmount}/>
                                                        </Col>
                                                    </FormGroup>
                                                    {
                                                        !!this.state.error &&
                                                        <p className='text-danger'
                                                           style={{fontSize: 10}}>{this.state.error}</p>
                                                    }
                                                    <div className='row'>
                                                        <div className='col-12'>
                                                            <center>
                                                                <Button
                                                                    onClick={() => BuyHUBbtnHandler()}
                                                                    type="button"
                                                                    className='btn btn-secondary btn-lg'>
                                                                    Buy Now
                                                                </Button>
                                                                {' '}
                                                                <Button type="button" onClick={this.HubProductHandler}
                                                                        className='btn btn-secondary btn-lg'>
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
                            <div className="close-modal" onClick={clearError} data-dismiss="modal">
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
                                                    <img className="img-fluid d-block mx-auto"
                                                         src="http://localhost:8080/images/portfolio/02-thumbnail.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className='col' style={{marginTop: 0}}>
                                                    <h3 className="text-uppercase" style={{marginTop: 0}}>SLAVE
                                                        Device</h3>
                                                    <p>{this.props.deviceDescription2}
                                                    </p>
                                                    <FormGroup row>
                                                        <Label for="exampleEmail" sm={2}>Shipping:</Label>
                                                        <Col sm={10}>
                                                            <p>Rs 200 Shipping in Pakistan</p>
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
                                                        <p className='text-danger'
                                                           style={{fontSize: 10}}>{this.state.error}</p>
                                                    }
                                                    <div className='row'>
                                                        <div className='col-12'>
                                                            <center>
                                                                <Button
                                                                    onClick={() => BuySLAVEbtnHandler()}
                                                                    type="button"
                                                                    className='btn btn-secondary btn-lg'>
                                                                    Buy Now
                                                                </Button>
                                                                {' '}
                                                                <Button
                                                                    type="button"
                                                                    onClick={this.SlaveProductHandler}
                                                                    className='btn btn-secondary btn-lg'>
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
                        Your order are sucessfully added into cart.
                    </ModalBody>
                    <ModalFooter>
                        <Button className='btn btn-primary' onClick={this.toggleBuyModal}>View Cart</Button>{' '}
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
    deviceName1: 'HUB',
    deviceDescription1: 'Auto generate call and notify to user',
    deviceImage1: 'http://localhost:8080/images/portfolio/04-thumbnail.jpg',
    unitPrice1: 1200,
    deviceName2: 'Slave',
    deviceDescription2: 'send health to server and hub device',
    deviceImage2: 'http://localhost:8080/images/portfolio/02-thumbnail.jpg',
    unitPrice2: 600
};
export default connect(mapStatToProps)(Home);