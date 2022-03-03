import React, { useState } from "react";
import { Form } from "react-bootstrap";
import validator from 'validator'

const PaymentDetails = ({ handleChange }) => {
    const [errorMessage, setErrorMessage] = useState('')
    
  const validateCreditCard = (value) => {
    
    if (validator.isCreditCard(value)) {
      setErrorMessage('Valid CreditCard Number')
    } else {
      setErrorMessage('Enter valid CreditCard Number!')
    }
  }

  return (
    <div className="d-flex flex-column p-5" >
      <h5 className="align-self-center" style={{fontWeight:'600', fontSize:'16px'}}>
        ENTER YOUR PAYMENT INFORMATION
      </h5>
      
      <div className="form-container" style={{marginLeft:'15%'}}>
      <hr style={{borderColor : '#2a74e5', width:'81%', marginLeft:'0'}} />
      Billing Address <br />
      <div class="d-flex flex-nowrap align-items-center ">
      <Form.Group className="" style={{width:'40%'}}>
        <Form.Control
          placeholder="Street Address"
          onChange={handleChange("street_address")}
          name="street_address"
        />
      </Form.Group>
      <Form.Group className="ml-2" style={{width:'40%'}}>
        <Form.Control
         placeholder="Apt/Suite/Unit"
          onChange={handleChange("street_address2")}
          name="street_address2"
        />
      </Form.Group>
      </div>
      <div class="d-flex flex-nowrap align-items-center mt-2">
      <Form.Group className="" style={{width:'40%'}}>
        <Form.Control
          placeholder="Country"
          onChange={handleChange("country")}
          name="country"
        />
      </Form.Group>
      <Form.Group className="ml-2" style={{width:'40%'}}>
        <Form.Control
          placeholder="City"
          onChange={handleChange("city")}
          name="city"
        />
      </Form.Group>
      </div>
      <div class="d-flex flex-nowrap align-items-center mt-2">
      <Form.Group className="" style={{width:'40%'}}>
        <Form.Control
          placeholder="State"
          onChange={handleChange("state")}
          name="state"
        />
      </Form.Group>
      <Form.Group className="ml-2" style={{width:'40%'}}>
        <Form.Control
          placeholder="Zip/ Postal Code"
          onChange={handleChange("postal_code")}
          name="postal_code"
        />
      </Form.Group>
      </div>
      
      <br />
      
         <hr style={{borderColor : '#2a74e5', width:'81%', marginLeft:'0'}}/>
         Billing Information
         <Form.Group className="" style={{width:'81%'}}>
            <Form.Control
            placeholder="Card Number"
            onChange={(e) => validateCreditCard("card_no")}
            name="card_no"
            />
            <span style={{
            fontWeight: 'bold',
            color: 'red',
            }}>{errorMessage}</span>
      </Form.Group>
        <div class="d-flex flex-nowrap align-items-center mt-2">
        <Form.Group className="" style={{width:'26.4%'}}>
            <Form.Control
            placeholder="Exp. Month"
            onChange={handleChange("exp_month")}
            name="exp_month"
            />
        </Form.Group>
        <Form.Group className="ml-2" style={{width:'26.4%'}}>
            <Form.Control
            placeholder="Exp. Year"
            onChange={handleChange("exp_year")}
            name="exp_year"
            />
        </Form.Group>
        <Form.Group className="ml-2" style={{width:'26.4%'}}>
            <Form.Control
            placeholder="CVV"
            onChange={handleChange("cvv")}
            name="cvv"
            />
        </Form.Group>
        </div>
        <br />
        
        <Form.Group className="ml-3" style={{width:'80%', fontSize:'14px'}}>
            <Form.Check
            placeholder="CVV"
            onChange={handleChange("cvv")}
            name="cvv"
            /> By checking this box, I confirm that I accept the Terms of Membership. I understand if my application is approved, I will be charged $595 for the first year of Membership, plus a one-time $95 initiation fee, which is non-refundable. My Membership will renew annually for $595 starting 1 year from the date I am approved.
        </Form.Group>
        </div>
    </div>
  );
};

export default PaymentDetails;
