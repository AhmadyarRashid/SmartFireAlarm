import React, {Component} from 'react';
import {
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import {connect} from 'react-redux';
import {changePassword} from '../../middleWare/userFunctions';

class UserCP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPass: '',
            newPass1: '',
            newPass2: '',
            error: ''
        }
    }

    changeOldPass = (e) => {
        const oldPass = e.target.value;
        this.setState({
            oldPass
        })
    }

    changeNewPass1 = (e) => {
        const newPass1 = e.target.value;
        this.setState({
            newPass1
        })
    }

    changeNewPass2 = (e) => {
        const newPass2 = e.target.value;
        this.setState({
            newPass2
        })
    }

    changePassHandler = (e) => {
        e.preventDefault();
        if (this.state.oldPass.trim() == '' || this.state.newPass1.trim() == '' || this.state.newPass2.trim() == '') {
            this.setState({
                error: 'Some fields are empty'
            })
        }
        if (this.state.newPass1.trim().length < 6) {
            this.setState({
                error: 'New Password Length must be greater than 5'
            })
        } else if (this.state.newPass1 !== this.state.newPass2) {
            this.setState({
                error: 'Both Password Mismatch'
            })
        } else {
            changePassword({
                email: this.props.userAuth.email,
                oldPass: this.state.oldPass,
                newPass: this.state.newPass1
            }).then(res => {
                console.log(res);
                if (res.cp == 'OK') {
                    this.setState({
                        error: 'Password Saved Sucessfully'
                    })
                    setTimeout(() => {
                        this.setState({
                            error: '',
                            oldPass: '',
                            newPass1: '',
                            newPass2: ''
                        })
                    }, 1500);
                } else {
                    this.setState({
                        error: res.cp
                    })
                }
            }).catch(err => {
                console.log(err);
            })
        }

    }

    render() {

        if (this.props.userAuth.isAuth == false) {
            window.open('http://localhost:8080/', '_self');
        } else {
            return (
                <Form>
                    <Breadcrumb>
                        <BreadcrumbItem active>Change Password</BreadcrumbItem>
                    </Breadcrumb>
                    <Row>
                        <Col md={10}>
                            <form method='post' onSubmit={this.changePassHandler}>
                                <FormGroup>
                                    <Label for="exampleAddress">Email</Label>
                                    <Input type="email"
                                           disabled={true}
                                           value={this.props.userAuth.email}
                                           className='form-control-lg' name="address"
                                           id="exampleAddress" autofocus={true}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress">Old Password</Label>
                                    <Input type="password"
                                           onChange={this.changeOldPass}
                                           required={true}
                                           value={this.state.oldPass}
                                           className='form-control-lg' name="address"
                                           id="exampleAddress" autofocus={true}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress1">New Password</Label>
                                    <Input type="password"
                                           required={true}
                                           value={this.state.newPass1}
                                           onChange={this.changeNewPass1}
                                           className='form-control-lg' name="address"
                                           id="exampleAddress1"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress2">Re-type New Password</Label>
                                    <Input type="password"
                                           required={true}
                                           value={this.state.newPass2}
                                           onChange={this.changeNewPass2}
                                           className='form-control-lg' name="address"
                                           id="exampleAddress2"/>
                                </FormGroup>
                                {!!this.state.error && <p className='text-danger' align="center">{this.state.error}</p>}
                                <Row>
                                    <Col md={10}></Col>
                                    <Col md={2}>
                                        <Button type='submit'
                                                className='btn btn-primary btn-lg form-control-lg'>Confirm</Button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Form>
            )
        }
    }
}

const mapStatToProps = state => ({
    userAuth: state.userAuth
})

export default connect(mapStatToProps)(UserCP);