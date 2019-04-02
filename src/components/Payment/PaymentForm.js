import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Elements, StripeProvider} from 'react-stripe-elements';
import OnlinePayment from './OnlinePayment';

function PaymentForm(props) {
    return (
        <React.Fragment>

            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <StripeProvider
                apiKey="pk_test_EdxFb7k0wHLKwB7MjqrCdzIm00VP9i3odL"
            >
                <Elements>
                    <OnlinePayment bill={props.bill} payCompleteSubmit={props.payCompleteSubmit}/>
                </Elements>
            </StripeProvider>

        </React.Fragment>
    );
}

export default PaymentForm;