import React, { useState } from 'react'
import CreditCardInput from 'react-credit-card-input';

function PaymentsSub() {
  const [plan, setPlan] = useState("free")


  const handleChange = (event) => {
    setPlan(event.target.value)
  }
  return (
    <div id='payment-container'>
      <h2>Payments & Subscriptions</h2>
      <h3>My plan</h3>
      <form>
        <div className='plan-option plan-1' id={plan === 'free' ? "selected" : null}>
          <div class="radio-option">
            <input type="radio" id="plan1"
            name="contact" value="free" checked={plan === 'free'}
            onChange={handleChange} />
            <label id='free'> FREE<p> Up to 10,000 monthly views</p></label>
          </div>
        </div><br/>
        <div className='plan-option plan-2' id={plan === 'premium' ? "selected" : null}>
          <div class="radio-option">
            <input type="radio" id="plan2"
            name="contact" value="premium" checked={plan === 'premium'}
            onChange={handleChange} />
            <label id='premium'> $26/m<p> Over 10,000 monthly views</p></label>
          </div>
        </div>
      </form>
      {plan === "premium" ? 
      <>
      <h3>Card information</h3>
        <CreditCardInput
        // cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
        // cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
        // cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
        
        /><br/>
        <h3>Billing information</h3>
        <div class="form-group">
          <input type="street" 
                class="form-control" 
                id="inputStreet" 
                placeholder="Street" /><br/>
          
          <input type="city" 
                class="form-control" 
                id="inputCity" 
                placeholder="City" />
          
          <input type="state" 
                class="form-control" 
                id="inputState" 
                placeholder="State" />
          
          <input type="zip" 
                class="form-control" 
                id="inputZip" 
                placeholder="Zip" /><br/>
          
          <input type="country" 
                class="form-control" 
                id="inputCountry" 
                placeholder="Country" />
        </div><br/>
        <button>Submit</button>
      </>
    : null
    }
    </div>
  )
}

export default PaymentsSub