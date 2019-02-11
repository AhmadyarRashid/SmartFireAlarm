import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStat: false,
            email: '',
            userName: '',
            address:'',
            phoneNo: ''
        }
    }


    handlerProfile = () => {
        this.setState((prevStat) => ({
            buttonStat: !prevStat.buttonStat
        }))
    }

    componentWillMount() {
        this.setState(() => ({
            email: this.props.userAuth.email,
            userName: this.props.userAuth.userName,
            address : this.props.userAuth.address,
            phoneNo: this.props.userAuth.phoneNo
        }));
    }

    changeName = (event) => {
        var userName = event.target.value;
        this.setState(()=> ({
            userName
        }));
    }

    changePhoneNo = (event) => {
        var phoneNo = event.target.value;
        this.setState(()=> ({
            phoneNo
        }));
    }

    changeAddress = (event) => {
        var address = event.target.value;
        this.setState(()=> ({
            address
        }));
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
                                    <label>All Orders : {this.props.userAuth.orders}</label><br/>
                                    <label>Awaiting Payment: {this.props.userAuth.awaitingPayment}</label><br/>
                                    <label>Awaiting Shipment: {this.props.userAuth.awaitingShipment}</label><br/>
                                    <label>Awaiting delivery: {this.props.userAuth.awaitingDelivery}</label><br/>
                                    <label>Awaiting Feedback: { this.props.userAuth.awaitingFeedback}</label><br/>
                                    <label>Disputes: {this.props.userAuth.disputes}</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-8 col-sm-12'>
                            <FormGroup>
                                <Label for="exampleAddress">Name</Label>
                                <Input id='nametxt' type="text" onChange={event => this.changeName(event)}  disabled={this.state.buttonStat ? false : true} value={this.state.userName}
                                       className='form-control-lg' name="address"
                                       id="exampleAddress"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">Phone No</Label>
                                <Input id='phonetxt' type="text" onChange={event => this.changePhoneNo(event)}  disabled={this.state.buttonStat ? false : true} value={this.state.phoneNo}
                                       className='form-control-lg' name="address"
                                       id="exampleAddress"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">Email</Label>
                                <Input id='emailtxt' type="text" disabled={true} value={this.props.email}
                                       className='form-control-lg' name="address"
                                       id="exampleAddress"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">Address</Label>
                                <Input id='addresstxt' type="text" onChange={event => this.changeAddress(event)}  disabled={this.state.buttonStat ? false : true} value={this.state.address}
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

const mapStatToProps = state => ({
   userAuth: state.userAuth
});

export default connect(mapStatToProps)(UserProfile);