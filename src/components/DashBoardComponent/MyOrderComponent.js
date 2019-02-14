import React, {Component} from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
    Form,
    Row,
    Col,
    FormGroup,
    Input,
    Label
} from "reactstrap";
import {connect} from "react-redux";
import StarRating from 'react-star-ratings';

class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFdModal: false,
            rating: 0,
            comment: ''
        }
    }

    toggleFeedBackModal = () => {
       this.toggleFeedBackCancelModal();
    }

    toggleFeedBackCancelModal = () => {
        this.setState((preStat) => ({
            showFdModal: !preStat.showFdModal,
            rating: 0,
            comment: ''
        }));
    }

    changeRating = (newRating, name) => {
        this.setState(() => ({
            rating: newRating
        }))
    }

    changeComment = (event) => {
        const comment = event.target.value
        this.setState(() => ({
            comment
        }))
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
                <tr>
                    <td colSpan={8}>
                        <center>
                            <button
                                onClick={this.toggleFeedBackModal}
                                className='btn btn-primary btn-lg'>
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


                <Modal isOpen={this.state.showFdModal} toggle={this.toggleFeedBackModal}
                       className={this.props.className}>
                    <ModalHeader toggle={this.toggleFeedBackModal}>Feedback</ModalHeader>
                    <ModalBody>
                        <center>
                            <StarRating
                                rating={this.state.rating}
                                changeRating={this.changeRating}
                                starRatedColor="yellow"
                                starHoverColor="yellow"
                                numberOfStars={5}
                                name='rating'
                            />
                            <h2>Rating : {this.state.rating}/5</h2>
                        </center>

                        <FormGroup>
                            <Label for="exampleText">Comment</Label>
                            <Input type="textarea" value={this.state.comment}
                                   onChange={event => this.changeComment(event)} name="text" id="exampleText"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleFeedBackModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggleFeedBackCancelModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

const mapStatToProps = state => ({
    myOrder: state.myOrder
});

export default connect(mapStatToProps)(MyOrder);