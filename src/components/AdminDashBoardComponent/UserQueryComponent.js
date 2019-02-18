import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import ToolkitProvider, {CSVExport, Search} from 'react-bootstrap-table2-toolkit';
import {connect} from 'react-redux';

const {SearchBar} = Search;

const columns = [{
    dataField: 'name',
    text: 'Customer Name',
    sort: true
}, {
    dataField: 'email',
    text: 'Email'
}, {
    dataField: 'phoneNo',
    text: 'Phone No',
    sort: true
}, {
    dataField: 'message',
    text: 'Message'
}, {
    dataField: 'status',
    text: 'Status'
}];


class UserQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            reply: ''
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
        }

        const sendEmail = (e,row) => {
            e.preventDefault();
            console.log(row);
            console.log('===============\n', this.state);
        }

        const expandRow = {
            showExpandColumn: true,
            renderer: row => {

                return (
                    <div>
                        <p>{`REPORT NO : ${row._id}`}</p>
                        <p>{`MESSAGE : ${row.message}`}</p>
                        <p>REPLY</p>
                        <textarea onChange={changeReplay} rows={6} cols={100}>

                        </textarea><br/>
                        <button className='btn btn-primary' style={{flex: 1}} onClick={e => sendEmail(e,row)}>REPLY</button>
                    </div>
                )
            }
        };


        return (
            <div
                style={{
                    flexGrow: 1,
                    marginTop: 65
                }}
                className='container'
            >
                <Breadcrumb>
                    <BreadcrumbItem active>User Query</BreadcrumbItem>
                </Breadcrumb>

                <ToolkitProvider
                    keyField='_id'
                    data={this.props.query}
                    columns={columns}
                    exportCSV
                    search={ { defaultSearch: 'false' } }
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


            </div>
        );
    }
}

const mapStatToProps = state => ({
    query: state.query
})

export default connect(mapStatToProps)(UserQuery);