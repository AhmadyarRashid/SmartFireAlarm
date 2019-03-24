import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
    }

    async submit(e) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("http://localhost:3000/charge", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id
        });

        if (response.ok) {
            this.setState({complete: true});
            setTimeout(() => {
                this.props.payCompleteSubmit(123);
            }, 2000);
        }
    }

    render() {
        if (this.state.complete)
            return <h1>Purchase Complete</h1>;

        return (
            <div className="checkout">
                <p>Would you to like to complete the purchase</p>
                <CardElement/>
                <center>
                    <button
                        className="btn btn-outline-primary"
                        onClick={this.submit}
                    >
                        Submit
                    </button>
                </center>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);