import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, FormGroup, Label, Input, Collapse, Button, CardBody, Card} from 'reactstrap';
import {addDevice} from '../../middleWare/sellerFunction';

class AddInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collHub: false,
            collslave: false,
            hubQty: 0,
            slaveQty: 0
        }
    }

    render() {

        const toggleHub = () => {
            this.setState((preStat) => ({
                collHub: !preStat.collHub
            }))
        }

        const toggleSlave = () => {
            this.setState((preStat) => ({
                collslave: !preStat.collslave
            }))
        }

        const changeHubQty = (e) => {
            var hubQty = e.target.value;
            this.setState({
                hubQty
            })
        }

        const changeSlaveQty = (e) => {
            var slaveQty = e.target.value;
            this.setState({
                slaveQty
            })
        }

        const addHubHandler = () => {
            console.log(this.state.hubQty);
            addDevice({type: 'HUB', qty: this.state.hubQty})
                .then(res => {
                    if (res.ad = 'OK') {
                        console.log(' HUB device add sucessfully')
                    }else {
                        console.log('Some Error Exists')
                    }
                })
                .catch(e => {
                    console.log(e);
                });
            this.setState({
                hubQty:0
            })
        }

        const addSlaveHandler = () => {
            console.log(this.state.slaveQty);
            addDevice({type: 'SLAVE', qty: this.state.slaveQty})
                .then(res => {
                    if (res.ad = 'OK') {
                        console.log('Slave device add sucessfully')
                    }else {
                        console.log('Some Error Exists')
                    }
                })
                .catch(e => {
                    console.log(e);
                });
            this.setState({
                slaveQty:0
            })
        }

        return (
            <div
                style={{
                    flexGrow: 1,
                    marginTop: 65
                }}
                className='container'
            >
                <Breadcrumb>
                    <BreadcrumbItem active>Add Inventory</BreadcrumbItem>
                </Breadcrumb>

                <Button color="primary" onClick={toggleHub} className='form-control' style={{marginBottom: '1rem'}}>Add
                    Hub</Button>
                <Collapse isOpen={this.state.collHub}>
                    <Card>
                        <CardBody>
                            <FormGroup>
                                <Label for="exampleEmail">Add Hub :</Label>
                                <Input
                                    value={this.state.hubQty}
                                    className='form-control-lg'
                                    min={0}
                                    onChange={changeHubQty}
                                    type="number"
                                    id="exampleEmail"/>
                            </FormGroup>

                            <button
                                onClick={addHubHandler}
                                className='btn btn-primary'>Confirm
                            </button>
                        </CardBody>
                    </Card>
                </Collapse>

                <Button color="primary" onClick={toggleSlave} className='form-control' style={{marginBottom: '1rem'}}>Add
                    Slave</Button>
                <Collapse isOpen={this.state.collslave}>
                    <Card>
                        <CardBody>
                            <FormGroup>
                                <Label for="slave">Add Slave :</Label>
                                <Input
                                    value={this.state.slaveQty}
                                    className='form-control-lg'
                                    min={0}
                                    onChange={changeSlaveQty}
                                    type="number"
                                    id="slave"/>
                            </FormGroup>
                            <button
                                onClick={addSlaveHandler}
                                className='btn btn-primary'>Confirm
                            </button>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default AddInventory;