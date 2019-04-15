import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteItemFromCart, updateQuantityCart} from '../../actions/cart';
import {localToRedux, userSignOut} from "../../actions/UserAuthenticate";
import {lastUpdatedCart} from '../../actions/cart';
import SimpleNav from './SimpleNavigationComponent';
import {emailVerifyOrNot, getProductQty} from "../../middleWare/userFunctions";
import ErrorBar from "../ErrorTopBar";

class CartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item1Qty: 0,
            item2Qty: 0,
            maxHub: 0,
            maxSlave: 0,
            verify: false
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

            emailVerifyOrNot({id: user.id})
                .then(res => {
                    console.log('====== verify email ==========', res);
                    if (res.evon === 'OK'){
                        if (res.doc.verify === true){
                            this.setState({
                                verify: true
                            })
                            console.log(this.state);
                        } else {
                            this.setState({
                                verify: false
                            })
                            console.log(this.state);
                        }
                    }
                }).catch(e => {
                console.log(e);
            });

        } catch (e) {
            console.log(e);
        }


        if (this.props.cart.length == 0) {
            console.log(JSON.parse(localStorage.getItem('cart')));
            var cart = JSON.parse(localStorage.getItem('cart'));
            this.props.dispatch(lastUpdatedCart({updatedCart: cart}));
        }

        var item1Qty = 0, item2Qty = 0;
        this.props.cart.forEach(item => {
            if (item.deviceId == 1) {
                item1Qty = item.quantity
            }
            if (item.deviceId == 2) {
                item2Qty = item.quantity;
            }
        });

        this.setState(() => ({
            item1Qty,
            item2Qty
        }));

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
            })
    }

    render() {
        const changeQTYHandler = (event, deviceId) => {

            var qty = 0;
            if (event.target.value == '') {
                qty = 0;
            } else {
                qty = Number(event.target.value);
            }
            if (deviceId == 1) {
                if (qty <= this.state.maxHub) {
                    this.setState(() => ({
                        item1Qty: qty
                    }));
                } else {
                    this.setState(() => ({
                        item1Qty: 1
                    }));
                    qty = 1
                }
            }
            if (deviceId == 2) {
                if (qty <= this.state.maxSlave) {
                    this.setState(() => ({
                        item2Qty: qty
                    }))
                } else {
                    this.setState(() => ({
                        item2Qty: 1
                    }))
                    qty = 1
                }

            }
            this.props.dispatch(updateQuantityCart({deviceId: deviceId, quantity: qty}));
            console.log(this.props.cart);

            try {
                localStorage.removeItem('cart');
                console.log('======== local storage Remove all Item ========\n', JSON.parse(localStorage.getItem('cart')));
            } catch (e) {
                console.log('===== errror to show empty ==========');

            }
            try {
                localStorage.setItem('cart', JSON.stringify(this.props.cart));
            } catch (e) {
                console.log(e);
            }

        }

        const removeItem = (deviceId) => {
            this.props.dispatch(deleteItemFromCart(deviceId));
            const cloneCart = this.props.cart;
            const updateCart = cloneCart.filter(item => item.deviceId != deviceId);

            localStorage.removeItem('cart');
            try {
                console.log('======== local storage Remove all Item ========\n', JSON.parse(localStorage.getItem('cart')));
            } catch (e) {
                console.log('===== errror to show empty ==========');

            }
            localStorage.setItem('cart', JSON.stringify(updateCart));
        }

        const TotalAmount = () => {
            var total = 0;
            this.props.cart.forEach(item => {
                total += Number(item.amount)
            })
            return (
                <p align="right">{total}</p>
            )
        }

        const OrderTotal = () => {
            var total = 0;
            this.props.cart.forEach(item => {
                total += Number(item.amount)
            })
            return (
                <p align="right">{total + 200}</p>
            )
        }

        const renderCardItems = (item, index) => (
            <tr key={index}>
                <td>
                    <img width='50' height='50'
                         src={item.image}
                         alt='Device Image'/>
                </td>
                <td colSpan={2}>
                    {item.deviceDescription}
                    <span>1 Year Warrenty*</span>
                </td>
                <td>
                    <input min={1} className='form-control' onChange={event => changeQTYHandler(event, item.deviceId)}
                           value={item.deviceId == 1 ? this.state.item1Qty : this.state.item2Qty} type='number'/>
                </td>
                <td>
                    <span className='text-muted'>pieces</span>
                </td>
                <td>
                    <p align="right">{item.unitPrice} <span className='text-muted'>/piece</span></p>
                </td>
                <td>
                    <p align="right">{Number(item.unitPrice) * Number(item.quantity)}</p>
                </td>
                <td>
                    <button onClick={event => removeItem(item.deviceId)} className='btn btn-link'>Remove
                    </button>
                </td>
            </tr>
        );

        const SignOutHandler = () => {
            console.log('===============click on signOut Button==================');
            this.props.dispatch(userSignOut());
            try {
                localStorage.removeItem('userAuth');
                localStorage.removeItem('cart');
            } catch (e) {
                console.log(e);
            }
            window.open('http://localhost:8080/', '_self');
        }

        if (this.props.userAuth.isAuth == false) {
            try {
                var auth = localStorage.getItem('userAuth');
                auth = JSON.parse(auth);
                if (auth.isAuth) {
                    return (
                        <div>
                            <SimpleNav/>

                            <div className='container' style={{marginTop: 110}}>
                                <table className='table table-hover table-striped table-responsive'>


                                    {this.props.cart.length == 0 ?
                                        '' :
                                        <thead>
                                        <tr>
                                            <th colSpan={3}>Product Name & Details</th>
                                            <th colSpan={2}>Quantity</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th colSpan={2}></th>
                                        </tr>
                                        </thead>
                                    }

                                    <tbody>

                                    {this.props.cart.map((item, index) => (
                                        renderCardItems(item, index)
                                    ))}

                                    </tbody>


                                    {this.props.cart.length == 0 ?
                                        'Your Cart is Empty!' :
                                        <tfoot>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td><p align="right"
                                                   className='text-muted'>Total Amount: </p></td>
                                            <td>
                                                {
                                                    TotalAmount()
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td><p align="right"
                                                   className='text-muted'>Shipping: </p></td>
                                            <td>
                                                <p align="right">200</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan={5}></td>
                                            <td><p align="right"
                                                   className='text-muted'>Order Total: </p></td>
                                            <td>
                                                {
                                                    OrderTotal()
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={6}></td>
                                            <td>
                                                <center>
                                                    <NavLink to='/payment' className='btn btn-primary btn-lg'>Check
                                                        Out</NavLink>
                                                </center>

                                            </td>
                                        </tr>
                                        </tfoot>
                                    }

                                </table>
                            </div>
                        </div>
                    );
                }
            } catch (e) {
                console.log(e);
                window.open('http://localhost:8080/', '_self');
            }

        } else {
            return (
                <div>
                    <SimpleNav/>

                    <div className='container' style={{marginTop: 110}}>
                        {this.state.verify == false && <ErrorBar/>}
                        <table className='table table-hover table-striped table-responsive'>


                            {this.props.cart.length == 0 ?
                                '' :
                                <thead>
                                <tr>
                                    <th colSpan={3}>Product Name & Details</th>
                                    <th colSpan={2}>Quantity</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                    <th colSpan={2}></th>
                                </tr>
                                </thead>
                            }

                            <tbody>

                            {this.props.cart.map((item, index) => (
                                renderCardItems(item, index)
                            ))}

                            </tbody>



                            {this.props.cart.length == 0 ?
                                'Your Cart is Empty!' :
                                <tfoot>
                                <tr>
                                    <td colSpan={5}></td>
                                    <td><p align="right"
                                           className='text-muted'>Total Amount: </p></td>
                                    <td>
                                        {
                                            TotalAmount()
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={5}></td>
                                    <td><p align="right"
                                           className='text-muted'>Shipping: </p></td>
                                    <td>
                                        <p align="right">200</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan={5}></td>
                                    <td><p align="right"
                                           className='text-muted'>Order Total: </p></td>
                                    <td>
                                        {
                                            OrderTotal()
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6}></td>
                                    <td>
                                        <center>
                                            <NavLink to='/payment' className={this.state.verify == true ? "btn btn-secondary btn-lg" : "btn btn-secondary btn-lg disabled"}>Check
                                                Out</NavLink>
                                        </center>

                                    </td>
                                </tr>
                                </tfoot>
                            }

                        </table>
                    </div>
                </div>
            );
        }


    }
}

const mapStatToProps = state => ({
    cart: state.cart,
    userAuth: state.userAuth
});

export default connect(mapStatToProps)(CartDetails);