import React , {Component} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


class UserQuery extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
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
            </div>
        );
    }
}

export default UserQuery;