import React, {Component} from 'react';
import {
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import {connect} from 'react-redux';
import {submitServiceReport, getAllServiceReport} from '../../middleWare/userFunctions';

class ReportComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            textarea: '',
            selectedReport: '',
            allReports: [],
            response: '',
            description: ''
        }
    }

    componentWillMount() {
        getAllServiceReport({
            userId: this.props.userAuth.id
        }).then(res => {
            console.log('======== all user reports ===========', res);
            this.setState({
                allReports: res.doc
            });
        }).catch(e => {
            console.log(e);
        });
    }

    getLatestReports(){
        getAllServiceReport({
            userId: this.props.userAuth.id
        }).then(res => {
            console.log('======== all user reports ===========', res);
            this.setState({
                allReports: res.doc
            });
        }).catch(e => {
            console.log(e);
        });
    }

    clearhandler = () => {
        this.setState({
            textarea: ''
        })
    };

    updateTextFieldhandler = (e) => {
        let textarea = e.target.value;
        this.setState({
            textarea
        });
    };

    responseHandler = (description, response) => {
        this.setState({
            description,
            response
        });
    };

    submitReportHandler = () => {
        if (this.state.textarea === '') {
            this.setState({
                error: 'TextArea Field is Empty'
            });
        } else {
            console.log(this.state);
            submitServiceReport({
                userId: this.props.userAuth.id,
                email: this.props.userAuth.email,
                description: this.state.textarea
            }).then(res => {
                console.log('============ report submitted ========', res);
                this.setState((preState) => ({
                    error: '',
                    textarea: ''
                }));
                this.getLatestReports();

            }).catch(e => {
                console.log(e);
                this.setState({
                    error: '',
                    textarea: ''
                });
            });

        }
    };

    render() {

        if (this.props.userAuth.isAuth === false) {
            window.open('http://localhost:8080/', '_self');
        } else {
            return (
                <div>
                    <Breadcrumb style={{marginTop: 50}}>
                        <BreadcrumbItem active>Reports Details</BreadcrumbItem>
                    </Breadcrumb>
                    <div align="center">
                        <button type="button" className="btn btn-outline-info btn-lg" data-toggle="modal"
                                data-target="#exampleModal1">
                            Any Report
                        </button>
                    </div>
                    <br/>

                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Report</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.allReports.map((item, index) => (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{item.description}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className={!!item.response ? "btn btn-outline-success" : "btn btn-outline-dark"}
                                            data-toggle="modal"
                                            data-target="#exampleModalLong"
                                            onClick={() => this.responseHandler(item.description, item.response)}
                                        >
                                            Response
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>


                    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Report : {this.state.description} <br/>
                                    Response : {!!this.state.response ? this.state.response : 'No Response'}
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">REPORT</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                        <textarea
                                            rows={5}
                                            className="form-control"
                                            value={this.state.textarea}
                                            onChange={this.updateTextFieldhandler}
                                        >
                                        </textarea>
                                    <div>
                                        {!!this.state.error ?
                                            <p
                                                className="text-danger"
                                                align="center"
                                                style={{fontSize: 10}}>{this.state.error}</p> : ''}
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                        onClick={this.clearhandler}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={this.submitReportHandler}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }
}

const mapStatToProps = state => ({
    userAuth: state.userAuth
})

export default connect(mapStatToProps)(ReportComponent);