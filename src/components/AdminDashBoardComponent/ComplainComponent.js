import React , {Component} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Complain extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div style={{
                flexGrow: 1,
                marginTop: 65
            }}
                 className='container'
            >
                <Breadcrumb>
                    <BreadcrumbItem active>Complains</BreadcrumbItem>
                </Breadcrumb>

                <img
                    src="http://localhost:8080/images/underConstruction.jpg"
                ></img>
            </div>
        );
    }
}

export default Complain;