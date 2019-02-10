import React, {Component} from 'react';
import {Col,InputGroup, InputGroupAddon, Row, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem} from 'reactstrap';

class UserCP extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <Breadcrumb>
                    <BreadcrumbItem active>Change Password</BreadcrumbItem>
                </Breadcrumb>
                <Row>
                    <Col md={10}>
                        <FormGroup>
                            <Label for="exampleAddress">Old Password</Label>
                            <Input type="password" className='form-control-lg' name="address"
                                   id="exampleAddress" autofocus={true} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress1">New Password</Label>
                            <Input type="password" className='form-control-lg' name="address"
                                   id="exampleAddress1"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">Re-type New Password</Label>
                            <Input type="password" className='form-control-lg' name="address"
                                   id="exampleAddress2"/>
                        </FormGroup>
                        <Row>
                            <Col md={10}></Col>
                            <Col md={2}>
                                <Button className='btn btn-primary btn-lg form-control-lg'>Confirm</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default UserCP;