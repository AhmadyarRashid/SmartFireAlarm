import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteItemFromCart, updateQuantityCart} from '../../actions/addToCart';

class CartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hubQty : 0 ,
            slaveQty: 0
        }
    }

    componentWillMount() {
        this.setState(() => ({
            hubQty: this.props.cart[0].quantity,
            slaveQty: this.props.cart[1].quantity
        }));
    }


    hubQtyHandler = (event) => {
        var hubQty = Number(event.target.value)
        this.setState(() => ({
            hubQty
        }));
        // this.props.dispatch(addCart({deviceId:1 : quantity}))
        if (Number(event.target.value) > 0) {
            this.props.dispatch(updateQuantityCart({deviceId : 1 , quantity : hubQty}));
        }
        console.log(this.props.cart);
    }

    slaveQtyHandler = (event) => {
        var slaveQty = Number(event.target.value)
        this.setState(() => ({
            slaveQty
        }));
        if (Number(event.target.value) > 0) {
            this.props.dispatch(updateQuantityCart({deviceId: 2 , quantity : slaveQty }));
        }
        console.log(this.props.cart);
    }

    removeHubItem = () => {
        this.props.dispatch(deleteItemFromCart(1));
        console.log(this.props.cart);
    }

    removeSlaveItem = () => {
        this.props.dispatch(deleteItemFromCart(2));
        console.log(this.props.cart);
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Cart</a>
                </nav>
                <div className='container'>
                    <table className='table table-hover table-striped table-responsive'>
                        {(this.props.cart[0].quantity == 0 && this.props.cart[1].quantity == 0) ?
                            '' :
                            <thead>
                            <tr>
                                <th colSpan={3}>Product Name & Details</th>
                                <th colSpan={2}>Quantity</th>
                                <th>Price</th>
                                <th>Shipping Details</th>
                                <th colSpan={2}></th>
                            </tr>
                            </thead>
                        }

                        <tbody>

                        {
                            this.props.cart[0].quantity > 0 &&
                            <tr>
                                <td>
                                    <img width='50' height='50'
                                         src={this.props.cart[0].image}
                                         alt='Device Image'/>
                                </td>
                                <td colSpan={2}>
                                    {this.props.cart[0].deviceDescription}
                                    <span>1 Year Warrenty*</span>
                                </td>
                                <td>
                                    <input className='form-control' onChange={event => this.hubQtyHandler(event)}
                                           value={this.state.hubQty} type='number'/>
                                </td>
                                <td>
                                    <span className='text-muted'>pieces</span>
                                </td>
                                <td>
                                    {this.props.cart[0].unitPrice} <span className='text-muted'>/piece</span>
                                </td>
                                <td>
                                    US$0.20 15 days No tracking information available
                                </td>
                                <td>
                                    <button onClick={this.removeHubItem} className='btn btn-link'>Remove</button>
                                </td>
                            </tr>}
                        {
                            this.props.cart[1].quantity > 0 &&
                            <tr>
                                <td>
                                    <img width='50' height='50'
                                         src={this.props.cart[1].image}
                                         alt='Device Image'/>
                                </td>
                                <td colSpan={2}>
                                    {this.props.cart[1].deviceDescription}
                                    <span>1 Year Warrenty*</span>
                                </td>
                                <td>
                                    <input className='form-control' onChange={event => this.slaveQtyHandler(event)}
                                           value={this.state.slaveQty} type='number'/>
                                </td>
                                <td>
                                    <span className='text-muted'>pieces</span>
                                </td>
                                <td>
                                    {this.props.cart[1].unitPrice} <span className='text-muted'>/piece</span>
                                </td>
                                <td>
                                    US$0.20 15 days No tracking information available
                                </td>
                                <td>
                                    <button onClick={this.removeSlaveItem} className='btn btn-link'>Remove</button>
                                </td>
                            </tr>}


                        </tbody>

                        {(this.props.cart[0].quantity == 0 && this.props.cart[1].quantity == 0) ?
                            <h2 align="center">Your Cart is Empty!</h2> :
                            <tfoot>
                            <tr>
                                <td colSpan={6}></td>
                                <td><span
                                    className='text-muted'>Subtotal: </span>{Number(this.props.cart[0].amount) + Number(this.props.cart[1].amount)}
                                </td>
                                <td colSpan={2}><span className='text-muted'>Shipping: </span>0</td>
                            </tr>
                            <tr>
                                <td align='right' colSpan={8}><span
                                    className='text-muted'>Total: </span>{Number(this.props.cart[0].amount) + Number(this.props.cart[1].amount)}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={7}></td>
                                <td>
                                    <center>
                                        <NavLink to='/payment' className='btn btn-primary btn-lg'>Buy</NavLink>
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

const mapStatToProps = state => ({
    cart: state.cart
});

export default connect(mapStatToProps)(CartDetails);