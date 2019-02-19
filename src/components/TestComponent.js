import React, {Component} from 'react';
import {buyProduct} from '../middleWare/userFunctions';

class TestComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buyHandler = () => {
            buyProduct({
                email: 'meo@gmail.com',
                hubQty: 2,
                slaveQty: 3,
                shipping: 200
            }).then(res => {
                if (res.bp == 'OK') {
                    console.log('add to cart sucessfully');
                } else {
                    console.log('some problem occurs');
                }
            }).catch(e => {
                console.log(e);
            })
        }

        return (
            <div>
                <center>
                    <button className='btn btn-primary' onClick={buyHandler}>Buy Order</button>
                </center>
            </div>
        );
    }
}

export default TestComponent;