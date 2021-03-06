import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {updateProfile} from '../../actions/UserAuthenticate';
import {userUpdateProfile} from '../../middleWare/userFunctions';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStat: false,
            email: '',
            userName: '',
            address: '',
            phoneNo: '',
            error: ''
        }
    }

    handlerProfile = (e) => {
        e.preventDefault();
        if (this.state.buttonStat == true) {
            if (this.state.userName.trim() == '' || this.state.phoneNo.trim() == '' || this.state.address.trim() == '') {
                this.setState(() => ({
                    error: 'Some Field are Empty!'
                }))
            } else {
                userUpdateProfile({
                    email: this.state.email.trim(),
                    name: this.state.userName.trim(),
                    address: this.state.address.trim(),
                    phoneNo: this.state.phoneNo.trim()
                }).then(res => {
                    if (res.up == 'OK') {
                        this.setState({
                            error: 'Data Update Sucessfully'
                        })

                        setTimeout(() => {
                            this.setState((preState) => ({
                                error: '',
                                userName: preState.userName.trim(),
                                phoneNo: preState.phoneNo.trim(),
                                address: preState.address.trim()
                            }));
                            this.props.dispatch(updateProfile({
                                userName: this.state.userName.trim(),
                                phoneNo: this.state.phoneNo.trim(),
                                address: this.state.address.trim()
                            }));
                            this.toggleEditSaveBtn();
                        }, 1500);
                    } else {
                        this.setState({
                            error: res.up
                        })
                    }
                }).catch(e => {
                    console.log(e);
                })

            }
        } else {
            this.toggleEditSaveBtn();
        }
    }

    toggleEditSaveBtn = () => {
        this.setState((prevStat) => ({
            buttonStat: !prevStat.buttonStat
        }))
    }

    componentWillMount() {
        this.setState(() => ({
            email: this.props.userAuth.email,
            userName: this.props.userAuth.userName,
            address: this.props.userAuth.address,
            phoneNo: this.props.userAuth.phoneNo
        }));
    }

    changeName = (event) => {
        var userName = event.target.value;
        this.setState(() => ({
            userName
        }));
    }

    changePhoneNo = (event) => {
        var phoneNo = event.target.value;
        this.setState(() => ({
            phoneNo
        }));
    }

    changeAddress = (event) => {
        var address = event.target.value;
        this.setState(() => ({
            address
        }));
    }


    render() {

        if (this.props.userAuth.isAuth == false) {
            window.open('http://localhost:8080/', '_self');
        } else {
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
                                             src='http://localhost:8080/images/team/user.png' alt='User Image'/>
                                    </div>
                                    <div className='col' style={{marginTop: 25}}>
                                        <label>All Orders : {this.props.userAuth.orders}</label><br/>
                                        <label>Awaiting Shipment: {this.props.userAuth.awaitingShipment}</label><br/>
                                        <label>Awaiting delivery: {this.props.userAuth.awaitingDelivery}</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-8 col-sm-12'>
                                <form method='post' onSubmit={this.handlerProfile}>
                                    <FormGroup>
                                        <Label for="exampleAddress">Name</Label>
                                        <Input id='nametxt' type="text" onChange={event => this.changeName(event)}
                                               disabled={this.state.buttonStat ? false : true}
                                               value={this.state.userName}
                                               className='form-control-lg' name="address"
                                               required={true}
                                               pattern="[A-Za-z0-9_ ]{3,12}"
                                               title="UserName char between [3,12].Only use alphanumeric character, space and _ char"
                                               id="exampleAddress"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress">Phone No</Label>
                                        <Input id='phonetxt' type="text" onChange={event => this.changePhoneNo(event)}
                                               disabled={this.state.buttonStat ? false : true}
                                               value={this.state.phoneNo}
                                               className='form-control-lg' name="address"
                                               pattern="03[0-9]{9}"
                                               title="For Example 03XXXXXXXXX total length must be 11"
                                               required={true}
                                               id="exampleAddress"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress">Email</Label>
                                        <Input id='emailtxt' type="text" disabled={true}
                                               value={this.props.userAuth.email}
                                               className='form-control-lg' name="address"
                                               pattern="[A-Za-z0-9_.]+@gmail.[a-z]{3}"
                                               title="For Example ahmedyar61@gmail.com"
                                               id="exampleAddress"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress">Address</Label>
                                        <Input id='addresstxt' type="text" onChange={event => this.changeAddress(event)}
                                               disabled={this.state.buttonStat ? false : true}
                                               value={this.state.address}
                                               className='form-control-lg' name="address"
                                               minLength={15}
                                               title="Min Length must be 15"
                                               required={true}
                                               id="exampleAddress"/>
                                    </FormGroup>
                                    {
                                        !!this.state.error && <p className="text-danger" style={{fontSize: 10}}>{this.state.error}</p>
                                    }
                                    <button
                                        type='submit'
                                        className='btn btn-secondary btn-lg form-control-lg'>
                                        {this.state.buttonStat == true ? 'Save Profile' : 'Edit Profile'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

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