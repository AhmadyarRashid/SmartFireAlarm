import React, {Component} from 'react';

class ForgetPassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    render() {

        const btnHandler = () => {
            this.setState((preStat) => (
                    {
                        count: preStat.count + 1
                    }
                )
            )
        }

        return (
            <div>
                FORGET PASSWORD
                <h1>{this.state.count}</h1>
                <button
                    onClick={btnHandler}
                >Click
                </button>

            </div>
        )
    }
}

export default ForgetPassComponent;