import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter , dateFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, {CSVExport, Search} from 'react-bootstrap-table2-toolkit';
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {connect} from 'react-redux';

const columns = [{
    dataField: 'userName',
    text: 'Name',
    sort: true
}, {
    dataField: 'email',
    text: 'Email',
    sort: true
}, {
    dataField: 'hub',
    text: 'Hub Qty'
}, {
    dataField: 'slave',
    text: 'Slave Qty'
}, {
    dataField: 'amount',
    text: 'Amount'
}, {
    dataField: 'date',
    text: 'Date'
}, {
    dataField: 'status',
    text: 'Status'
}];



class SaleComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {SearchBar} = Search;

        const customTotal = (from, to, size) => (
            <span className="react-bootstrap-table-pagination-total text-muted">
                Showing {from} to {to} of {size} Results
            </span>
        );

        const options = {
            paginationSize: 4,
            pageStartIndex: 0,
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: this.props.sales.length
            }] // A numeric array is also available. the purpose of above example is custom the text
        };

        if (this.props.adminAuth.isAuth === false){
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
                        <BreadcrumbItem active>Sale Details</BreadcrumbItem>
                    </Breadcrumb>

                    <ToolkitProvider
                        keyField='_id'
                        data={this.props.sales}
                        columns={columns}
                        exportCSV
                        search
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
                                        pagination={paginationFactory(options)}
                                        filter={filterFactory()}
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
}

const mapStatToProps = state => ({
    adminAuth : state.adminAuth,
    sales: state.sales
})
export default connect(mapStatToProps)(SaleComponent);