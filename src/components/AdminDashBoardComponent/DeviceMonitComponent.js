import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import ToolkitProvider, {CSVExport, Search} from 'react-bootstrap-table2-toolkit';
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {connect} from 'react-redux';

const {ExportCSVButton} = CSVExport;
const {SearchBar} = Search;

const columns = [
    {
        dataField: '_id',
        text: 'Id',
        sort: true
    }, {
        dataField: 'label',
        text: 'Label',
        sort: true
    }, {
        dataField: 'location',
        text: 'Location'
    },{
        dataField: 'health',
        text: 'Health'
    }, {
        dataField: 'deviceType',
        text: 'Type'
    }, {
        dataField: 'configuration',
        text: 'Configuration'
    }];

class DeviceMonit extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.adminAuth.isAuth == false) {
            window.open('http://localhost:8080/admin', '_self');
        } else {
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
                        data={this.props.devices}
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
                                        noDataIndication={'no results found'}/>
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </main>
            )
        }

    }
}

const mapStatToProps = state => ({
    adminAuth: state.adminAuth,
    devices: state.devices
});
export default connect(mapStatToProps)(DeviceMonit);