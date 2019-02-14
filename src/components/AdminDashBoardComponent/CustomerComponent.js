import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

const products = [
    {id: 0, name: 'milk', price: 30},
    {id: 1, name: 'milk2', price: 31},
    {id: 2, name: 'milk3', price: 32},
    {id: 3, name: 'milk4', price: 33},
    {id: 4, name: 'milk5', price: 34},
    {id: 5, name: 'milk6', price: 35},
    {id: 6, name: 'milk7', price: 36},
    {id: 7, name: 'milk', price: 30},
    {id: 8, name: 'milk2', price: 31},
    {id: 9, name: 'milk3', price: 32},
    {id: 10, name: 'milk4', price: 33},
    {id: 11, name: 'milk5', price: 34},
    {id: 12, name: 'milk6', price: 35},
    {id: 13, name: 'milk7', price: 36},
    {id: 14, name: 'milk', price: 30},
    {id: 15, name: 'milk2', price: 31},
    {id: 16, name: 'milk3', price: 32},
    {id: 17, name: 'milk4', price: 33},
    {id: 18, name: 'milk5', price: 34},
    {id: 19, name: 'milk6', price: 35},
    {id: 20, name: 'milk7', price: 36},
    {id: 21, name: 'milk', price: 30},
    {id: 22, name: 'milk2', price: 31},
    {id: 23, name: 'milk3', price: 32},
    {id: 24, name: 'milk4', price: 33},
    {id: 25, name: 'milk5', price: 34},
    {id: 26, name: 'milk6', price: 35},
    {id: 27, name: 'milk7', price: 36},
    {id: 28, name: 'milk', price: 30},
    {id: 29, name: 'milk2', price: 31},
    {id: 30, name: 'milk3', price: 32},
    {id: 31, name: 'milk4', price: 33},
    {id: 32, name: 'milk5', price: 34},
    {id: 33, name: 'milk6', price: 35},
    {id: 34, name: 'milk7', price: 36}
];
const { ExportCSVButton } = CSVExport;

const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true
}, {
    dataField: 'name',
    text: 'Product Name',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'price',
    text: 'Product Price',
    sort: true,
    filter: textFilter()
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
                    marginTop:85
                }}
                className='container'>

                <ToolkitProvider
                    keyField='id'
                    data={products}
                    columns={columns}
                    exportCSV
                >
                    {
                        props => (
                            <div>
                                <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
                                <hr />
                                <BootstrapTable
                                    bootstrap4
                                    striped
                                    hover
                                    condensed
                                    pagination={ paginationFactory()}
                                    filter={ filterFactory() }
                                    { ...props.baseProps } />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </main>
        )
    }
}

export default CustomerComponent;