import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Form, Row, Col} from "reactstrap";
import NavLink from "react-router-dom/es/NavLink";

class MyOrder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem active>My Orders</BreadcrumbItem>
                </Breadcrumb>

                <table className='table table-hover table-striped table-responsive'>
                    <thead>
                    <tr>
                        <th colSpan={3}>Product Name & Details</th>
                        <th colSpan={2}>Quantity</th>
                        <th>Price</th>
                        <th>Shipping Details</th>
                        <th colSpan={2}></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <img width='50' height='50' src='http://localhost:8080/images/portfolio/01-thumbnail.jpg' alt='Device Image'/>
                        </td>
                        <td colSpan={2}>
                            Smart Hub Device have auto generate call , notify to user, check health through app.
                            <span>1 Year Warrenty*</span>
                        </td>
                        <td>
                            <input className='form-control' type='number'/>
                        </td>
                        <td>
                            <span className='text-muted'>pieces</span>
                        </td>
                        <td>
                            US $15 <span className='text-muted'>/piece</span>
                        </td>
                        <td>
                            US$0.20 15 days No tracking information available
                        </td>
                        <td>
                            <button className='btn btn-link'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img width='50' height='50' src='http://localhost:8080/images/portfolio/01-thumbnail.jpg' alt='Device Image'/>
                        </td>
                        <td colSpan={2}>
                            Smart Hub Device have auto generate call , notify to user, check health through app.
                            <span>1 Year Warrenty*</span>
                        </td>
                        <td>
                            <input className='form-control' type='number'/>
                        </td>
                        <td>
                            <span className='text-muted'>pieces</span>
                        </td>
                        <td>
                            US $15 <span className='text-muted'>/piece</span>
                        </td>
                        <td>
                            US$0.20 15 days No tracking information available
                        </td>
                        <td>
                            <button className='btn btn-link'>Remove</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyOrder;