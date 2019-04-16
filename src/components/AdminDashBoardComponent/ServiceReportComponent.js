import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import ToolkitProvider, {CSVExport, Search} from 'react-bootstrap-table2-toolkit';
import {connect} from 'react-redux';
import {sendReplyToServiceReport} from '../../middleWare/sellerFunction';
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from "react-toasts";

const {SearchBar} = Search;

const columns = [{
    dataField: 'userId',
    text: 'Customer Id',
    sort: true
}, {
    dataField: 'email',
    text: 'Email'
}, {
    dataField: 'description',
    text: 'Description',
    sort: true
}, {
    dataField: 'status',
    text: 'Status'
}];


class ServiceReportComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            reply: '',
            reports: []
        }
    }


    render() {
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            clickToExpand: true
        };

        const changeReplay = (e) => {
            var reply = e.target.value;
            this.setState({
                reply
            })
        };

        const sendEmail = (e, row) => {
            e.preventDefault();
            console.log('========= yahoo reply send sucessfully ============');
            console.log(row);

            sendReplyToServiceReport({
                id: row._id,
                response: this.state.reply
            }).then(res => {
                if (res.srtsr === 'OK') {
                    console.log('email sent sucessfully');
                    ToastsStore.success(`Email Send Sucessfully`, 3000);
                } else {
                    ToastsStore.error(`Email not send due to some network problem`, 3000);
                }

                this.setState({
                    reply: ''
                })
            }).catch(e => {
                console.log(e);
                this.setState({
                    reply: ''
                })
            });

            //
            // sendReplyEmail({
            //     id: row._id,
            //     name: row.name,
            //     email: row.email,
            //     message: row.message,
            //     reply: this.state.reply
            // }).then(res => {
            //     if (res.sr == 'OK') {
            //         console.log('email sent sucessfully');
            //         ToastsStore.success(`Email Send Sucessfully`, 3000);
            //     } else {
            //         ToastsStore.error(`Email not send due to some network problem`, 3000);
            //     }
            // }).catch(e => {
            //     console.log(e);
            // });
            // this.props.dispatch(sendReply(row._id));

        }

        const expandRow = {
            showExpandColumn: true,
            renderer: row => {
                return (
                    <div>
                        <p>{`REPORT NO : ${row._id}`}</p>
                        <p>{`DESCRIPTION : ${row.description}`}</p>
                        <p>REPLY</p>
                        <textarea onChange={changeReplay} rows={6} cols={100}>

                        </textarea><br/>
                        <button className='btn btn-primary' style={{flex: 1}} onClick={e => sendEmail(e, row)}>REPLY
                        </button>
                    </div>
                )
            }
        };

        if (this.props.adminAuth.isAuth === false) {
            window.open('http://localhost:8080/admin', '_self');
        } else {
            return (
                <div
                    style={{
                        flexGrow: 1,
                        marginTop: 65
                    }}
                    className='container'
                >
                    <Breadcrumb>
                        <BreadcrumbItem active>Service Complains</BreadcrumbItem>
                    </Breadcrumb>

                    <ToolkitProvider
                        keyField='_id'
                        data={this.props.serviceReports}
                        columns={columns}
                        exportCSV
                    >
                        {
                            props => (
                                <div>
                                    <SearchBar {...props.searchProps} />
                                    <hr/>
                                    <BootstrapTable
                                        bootstrap4
                                        striped
                                        hover
                                        condensed
                                        pagination={paginationFactory()}
                                        filter={filterFactory()}
                                        selectRow={selectRow}
                                        expandRow={expandRow}
                                        {...props.baseProps}
                                        noDataIndication={'no results found'}/>
                                </div>
                            )
                        }
                    </ToolkitProvider>

                    <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} lightBackground store={ToastsStore}/>
                </div>
            );
        }

    }
}

const mapStatToProps = state => ({
    adminAuth: state.adminAuth,
    serviceReports: state.serviceReports
})

export default connect(mapStatToProps)(ServiceReportComponent);