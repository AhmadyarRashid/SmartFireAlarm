import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {getAllReports} from '../../middleWare/sellerFunction';
import {storeAllReports} from '../../actions/reports';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import ToolkitProvider, {CSVExport, Search} from 'react-bootstrap-table2-toolkit';
import {sendReportUpdate} from '../../middleWare/sellerFunction';
import {ToastsContainer,ToastsContainerPosition, ToastsStore} from 'react-toasts';

const {SearchBar} = Search;
const columns = [{
    dataField: '_id',
    text: 'deviceId',
    sort: true
}, {
    dataField: 'email',
    text: 'Email'
}, {
    dataField: 'subject',
    text: 'Subject',
    sort: true
}, {
    dataField: 'description',
    text: 'Description'
}];


class Complain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cb1: false,
            cb2: false,
            cb3: false
        };
    }

    componentWillMount() {
        getAllReports({})
            .then(res => {
                if (res.gr == 'OK') {
                    console.log(res);
                    this.props.dispatch(storeAllReports(res.doc));
                } else if (res.gr == 'noData') {
                    console.log('no data found');
                } else {

                }
            }).catch(e => {
            console.log(e);
        });
    }

    render() {

        const changecb1 = (e, row) => {
            console.log(e.target.checked);
            if (row.status == 0) {
                this.setState({
                    cb1: e.target.checked
                })
            } else {
                e.target.checked = false;
            }
        }

        const changecb2 = (e, row) => {
            console.log(e.target.checked);
            if (row.status == 1) {
                this.setState({
                    cb2: e.target.checked
                })
            } else {
                e.target.checked = false;
            }
        }

        const changecb3 = (e, row) => {
            console.log(e.target.checked);
            if (row.status == 2) {
                this.setState({
                    cb3: e.target.checked
                })
            } else {
                e.target.checked = false;
            }

        }

        const submitProgress = (e, row) => {
            e.preventDefault();
            console.log('=============================================');
            if (this.state.cb1) {
                sendReportUpdate({
                    reportId: row._id,
                    status: 1,
                    deviceName : row.deviceName,
                    email: row.email,
                    description: this.props.reply20
                }).then(res => {
                    if(res){
                        ToastsStore.success(`Send to  Email ${row.email}  Sucessfully`, 3000);
                    }
                }).catch(e => {
                    console.log(e);
                })
            } else if (this.state.cb2) {
                sendReportUpdate({
                    id: row._id,
                    status: 2,
                    deviceName : row.deviceName,
                    email: row.email,
                    description: this.props.reply40
                }).then(res => {
                    if(res){
                        ToastsStore.success(`Send to  Email ${row.email}  Sucessfully`, 3000);
                    }
                }).catch(e => {
                    console.log(e);
                })
            } else if (this.state.cb3) {
                sendReportUpdate({
                    reportId: row._id,
                    status: 3,
                    deviceName : row.deviceName,
                    email: row.email,
                    description: this.props.reply60
                }).then(res => {
                    if(res){
                        ToastsStore.success(`Send to  Email ${row.email}  Sucessfully`, 3000);
                    }
                }).catch(e => {
                    console.log(e);
                })
            } else {

            }
            // console.log(this.state);
            console.log(row);
            this.setState({
                cb1: false,
                cb2: false,
                cb3: false
            })
        }

        const expandRow = {
            showExpandColumn: true,
            renderer: row => {

                return (
                    <div>
                        <p>Subject: {row.subject}</p>
                        <p>Description: {row.description}</p>
                        {Number(row.status) >= 1 ?
                            <p><input type='checkbox' checked={true}/> Reviced</p> :
                            <p><input type='checkbox' onChange={e => changecb1(e, row)}/> Reviced</p>
                        }
                        {Number(row.status) >= 2 ?
                            <p><input type='checkbox' checked={true}/> In Progress</p> :
                            <p><input type='checkbox' onChange={e => changecb2(e, row)}/> In Progress</p>
                        }
                        {Number(row.status) >= 3 ?
                            <p><input type='checkbox' checked={true}/> Complete</p> :
                            <p><input type='checkbox' onChange={(e) => changecb3(e, row)}/> Complete</p>
                        }
                        <button className='btn btn-primary' onClick={e => submitProgress(e, row)}
                                style={{flex: 1}}>Save
                        </button>
                    </div>
                )
            }
        };

        return (
            <div style={{
                flexGrow: 1,
                marginTop: 65
            }}
                 className='container'
            >
                <Breadcrumb>
                    <BreadcrumbItem active>Complains</BreadcrumbItem>
                </Breadcrumb>

                <ToolkitProvider
                    keyField='_id'
                    data={this.props.reports}
                    columns={columns}
                    exportCSV
                    search={{}}
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
                                    expandRow={expandRow}
                                    {...props.baseProps}
                                    noDataIndication={'no results found'}/>
                            </div>
                        )
                    }
                </ToolkitProvider>
                <ToastsContainer position={ToastsContainerPosition.BOTTOM_RIGHT} lightBackground store={ToastsStore}/>
            </div>
        );
    }
}

const mapStatToProps = state => ({
    adminAuth: state.adminAuth,
    reports: state.reports
})

Complain.defaultProps = {
    reply20: 'Your report have been recieved. Thanks for your paitences.',
    reply40: 'Now your report have been In Progress and try to solve it. Thanks for your paitences.',
    reply60: 'Your report have been Solved. Thanks for your paitences.'
}

export default connect(mapStatToProps)(Complain);