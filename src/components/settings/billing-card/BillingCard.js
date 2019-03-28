import React from "react";
import Checkout from "../../checkout/Checkout.js";
import { connect } from 'react-redux';

import { chargeCustomer, payoutCustomer } from '../../../store/actions/stripeAction.js';
import { BillingCardContainer } from "../settingsStyles.js";

const BillingCard = props => {
  const { amount, acct_type, stripe_cust_id } = props.currentUser
  return (
    <BillingCardContainer>
      {acct_type === "affiliate" ?
      <div>
        <h1>Current Balance</h1>
        <h2>{`$ ${amount} USD`}</h2>
        <button onClick={() => {
          props.payoutCustomer()
        }}>Withdraw</button>
      </div> 
      : acct_type === "advertiser" &&
      <div>
        <h1>Amount Due</h1>
        <h2>{`$ ${amount} USD`}</h2>
        {stripe_cust_id ? 
        <button onClick={() => {
          props.chargeCustomer()
        }}>
          Pay Now
        </button>:
        <Checkout 
          btn_text="Add Payment Method"
        />
        }
      </div>
      }
    </BillingCardContainer>
  );
};

export default connect(
  null,
  {
    chargeCustomer,
    payoutCustomer
  }
)(BillingCard);
