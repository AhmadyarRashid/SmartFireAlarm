import React, {Component} from 'react';
import {buyProduct} from '../middleWare/userFunctions';

class TestComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div>
                <center>
                    <button className='btn btn-primary' >Buy Order</button>
                </center>
            </div>
        );
    }
}

export default TestComponent;