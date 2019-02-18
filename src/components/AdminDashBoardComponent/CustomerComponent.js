import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import ToolkitProvider, {CSVExport, Search} from 'react-bootstrap-table2-toolkit';
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {connect} from 'react-redux';

const {ExportCSVButton} = CSVExport;
const {SearchBar} = Search;

const columns = [{
    dataField: 'name',
    text: 'Customer Name',
    sort: true
}, {
    dataField: 'phoneNo',
    text: 'Phone No',
    sort: true
}, {
    dataField: 'address',
    text: 'Address'
}, {
    dataField: 'email',
    text: 'Email'
}, {
    dataField: 'order',
    text: 'Order'
}];

class CustomerComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <main
                style={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    marginTop: 65
                }}
                className='container'>

                <Breadcrumb>
                    <BreadcrumbItem active>Customer</BreadcrumbItem>
                </Breadcrumb>
                <ToolkitProvider
                    keyField='_id'
                    data={this.props.users}
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
                                    pagination={paginationFactory()}
                                    filter={filterFactory()}
                                    {...props.baseProps}
                                    noDataIndication={ 'no results found' }/>
                            </div>
                        )
                    }
                </ToolkitProvider>
            </main>
        )
    }
}

const mapStatToProps = state => ({
    users: state.users
});
export default connect(mapStatToProps)(CustomerComponent);