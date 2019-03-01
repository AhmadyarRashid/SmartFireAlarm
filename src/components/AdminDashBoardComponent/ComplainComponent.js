import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {getAllReports} from '../../middleWare/sellerFunction';
import {storeAllReports} from '../../actions/reports';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import ToolkitProvider, {CSVExport, Search} from 'react-bootstrap-table2-toolkit';

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

        const expandRow = {
            showExpandColumn: true,
            renderer: row => {

                return (
                    <div>
                        <p>Subject: {row.subject}</p>
                        <p>Description: {row.description}</p>
                        {Number(row.status) >= 1 ?
                            <p><input type='checkbox' checked={true}/> Reviced</p> :
                            <p><input type='checkbox'/> Reviced</p>
                        }
                        {Number(row.status) >= 2 ?
                            <p><input type='checkbox' checked={true}/> In Progress</p> :
                            <p><input type='checkbox'/> In Progress</p>
                        }
                        {Number(row.status) >= 3 ?
                            <p><input type='checkbox' checked={true}/> Complete</p> :
                            <p><input type='checkbox'/> Complete</p>
                        }
                        <button className='btn btn-primary' style={{flex: 1}}>Save</button>
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
            </div>
        );
    }
}

const mapStatToProps = state => ({
    adminAuth: state.adminAuth,
    reports: state.reports
})
export default connect(mapStatToProps)(Complain);