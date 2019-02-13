import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Form, Row, Col} from "reactstrap";
import {connect} from "react-redux";
import Button from "@material-ui/core/es/Button/Button";

class MyOrder extends Component {
    constructor(props) {
        super(props);
    }

    renderOrders = (order, index) => (
        <div key={index}>
            <Breadcrumb>
                <BreadcrumbItem>Order Date : {String(order.date)}</BreadcrumbItem>
            </Breadcrumb>
            <table className='table table-hover table-striped table-responsive'>
                <thead>
                <tr>
                    <th colSpan={3}>Product Name & Details</th>
                    <th colSpan={2}>Quantity</th>
                    <th>Price</th>
                    <th>Shipping Details</th>
                    <th colSpan={2}>Amount</th>
                </tr>
                </thead>
                <tbody>
                {order.order.map(item => (
                    this.renderItems(item)
                ))}
                </tbody>
                <tfoot>
                <tr >
                    <td colSpan={8}>
                    <center>
                        <button className='btn btn-primary btn-lg'>
                            FeedBack
                        </button>
                        {'   '}
                        <button className='btn btn-primary btn-lg'>
                            Recieved
                        </button>
                    </center>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );

    renderItems = (item) => (
        <tr key={item.deviceId}>
            <td>
                <img width='50' height='50' src={item.image}
                     alt='Device Image'/>
            </td>
            <td colSpan={2}>
                {item.deviceDescription}
                <span>1 Year Warrenty*</span>
            </td>
            <td>
                {item.quantity}
            </td>
            <td>
                <span className='text-muted'>pieces</span>
            </td>
            <td>
                {item.unitPrice} <span className='text-muted'>/piece</span>
            </td>
            <td>
                US$0.20 15 days No tracking information available
            </td>
            <td>
                {item.amount}
            </td>
        </tr>
    );

    render() {
        const showNoOrder = () => {
            if (this.props.myOrder.length == 0) {
                return <p>No Order Exists.</p>
            }
        }
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem active>My Orders</BreadcrumbItem>
                </Breadcrumb>
                {showNoOrder()}
                {this.props.myOrder.map((order, index) => (
                    this.renderOrders(order)
                ))}

            </div>
        )
    }
}

const mapStatToProps = state => ({
    myOrder: state.myOrder
});

export default connect(mapStatToProps)(MyOrder);