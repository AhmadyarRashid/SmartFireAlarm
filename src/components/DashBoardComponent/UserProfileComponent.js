import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, FormGroup, Label, Input} from 'reactstrap';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStat: false
        }
    }


    handlerProfile = () => {
        this.setState((prevStat) => ({
            buttonStat: !prevStat.buttonStat
        }))
    }

    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem active>Profile</BreadcrumbItem>
                </Breadcrumb>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 col-sm-12'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img width='150' height='150' className='img-thumbnail'
                                         src='http://localhost:8080/images/team/2.jpg' alt='User Image'/>
                                </div>
                                <div className='col'>
                                    <label>All Orders : 2</label><br/>
                                    <label>Awaiting Payment: 0</label><br/>
                                    <label>Awaiting Shipment: 0</label><br/>
                                    <label>Awaiting delivery: 0</label><br/>
                                    <label>Awaiting Feedback: 0</label><br/>
                                    <label>Disputes: 0</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-8 col-sm-12'>
                            <FormGroup>
                                <Label for="exampleAddress">Name</Label>
                                <Input id='nametxt' type="text"  disabled={this.state.buttonStat ? false : true} value={this.props.name}
                                       className='form-control-lg' name="address"
                                       id="exampleAddress"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">Phone No</Label>
                                <Input id='phonetxt' type="text" disabled={this.state.buttonStat ? false : true} value={this.props.phoneNo}
                                       className='form-control-lg' name="address"
                                       id="exampleAddress"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">Email</Label>
                                <Input id='emailtxt' type="text" disabled={this.state.buttonStat ? false : true} value={this.props.email}
                                       className='form-control-lg' name="address"
                                       id="exampleAddress"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">Address</Label>
                                <Input id='addresstxt' type="text" disabled={this.state.buttonStat ? false : true} value={this.props.address}
                                       className='form-control-lg' name="address"
                                       id="exampleAddress"/>
                            </FormGroup>
                            <button onClick={this.handlerProfile} className='btn btn-primary btn-lg form-control-lg'>
                                {this.state.buttonStat == true ? 'Save' : 'Edit'}

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UserProfile.defaultProps = {
    name: 'Customer XYZ',
    phoneNo: '+92 333 1536666',
    email: 'customer@gmail.com',
    address: 'Sector G-9 islamabad, pakistan'
}

export default UserProfile;