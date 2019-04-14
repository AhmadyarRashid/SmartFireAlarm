import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {changePassword} from '../../middleWare/sellerFunction';

class AdminChangePass extends Component {
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

    submitForm = e => {
        e.preventDefault();
        if (this.state.oldPass.trim() == "" || this.state.newPass1.trim() == "" || this.state.newPass2.trim() == "") {
            this.setState({
                error: 'Some Field are empty'
            })
        } else if (this.state.newPass1 !== this.state.newPass2) {
            this.setState({
                error: 'Both Password Mismatch'
            })
        }
        // }else if(this.state.oldPass !== this.props.adminAuth.password){
        //     this.setState({
        //         error: 'Old Password are wrong'
        //     })
        // }
        else {
            console.log(this.state);
            changePassword({
                email: this.props.adminAuth.email,
                oldPass: this.state.oldPass,
                newPass: this.state.newPass1
            }).then(res => {
                if (res.acp == 'OK') {
                    this.setState({
                        error: 'Password Change Sucessfully'
                    })

                    setTimeout(() => {
                        this.setState({
                            oldPass: '',
                            newPass1: '',
                            newPass2: '',
                            error: ''
                        });
                    }, 1000);
                } else if (res.acp == 'OldPassWrong') {
                    this.setState({
                        error: 'Old Password are wrong'
                    })
                } else if (res.acp == 'SNP') {
                    this.setState({
                        error: 'Some Network Problem'
                    })
                }
            }).catch(e => {
                console.log(e);
            })
        }

    }

    render() {
        if (this.props.adminAuth.isAuth == false){
            window.open('http://localhost:8080/admin', '_self');
        } else {
            return (
                <div style={{
                    flexGrow: 1,
                    marginTop: 65
                }}
                     className='container'
                >
                    <Breadcrumb>
                        <BreadcrumbItem active>Change Password</BreadcrumbItem>
                    </Breadcrumb>

                    <Form method='post' onSubmit={this.submitForm}>
                        <Row>
                            <Col md={10}>
                                <form method='post'>
                                    <FormGroup>
                                        <Label for="exampleAddress">Email</Label>
                                        <Input type="email"
                                               disabled={true}
                                               value={this.props.adminAuth.email}
                                               className='form-control-lg' name="address"
                                               id="exampleAddress" autofocus={true}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress">Old Password</Label>
                                        <Input type="password"
                                               onChange={this.changeOldPass}
                                               required={true}
                                               value={this.state.oldPass}
                                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                               title="Password must conatin UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
                                               className='form-control-lg' name="address"
                                               id="exampleAddress" autofocus={true}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress1">New Password</Label>
                                        <Input type="password"
                                               required={true}
                                               value={this.state.newPass1}
                                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                               title="Password must conatin UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
                                               onChange={this.changeNewPass1}
                                               className='form-control-lg' name="address"
                                               id="exampleAddress1"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress2">Re-type New Password</Label>
                                        <Input type="password"
                                               required={true}
                                               value={this.state.newPass2}
                                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                               title="Password must conatin UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
                                               onChange={this.changeNewPass2}
                                               className='form-control-lg' name="address"
                                               id="exampleAddress2"/>
                                    </FormGroup>
                                    {!!this.state.error &&
                                    <p className='text-danger' style={{fontSize: 10}}
                                       align="center">{this.state.error}</p>}
                                    <Row>
                                        <Col md={10}></Col>
                                        <Col md={2}>
                                            <Button type='submit'
                                                    className='btn btn-secondary btn-lg form-control-lg'>Confirm</Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Form>
                </div>
            )
        }

    }
}

const mapStatToProps = state => ({
    adminAuth: state.adminAuth
});
export default connect(mapStatToProps)(AdminChangePass);