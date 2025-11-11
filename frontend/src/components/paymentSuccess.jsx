import React from 'react'
import { useLocation } from 'react-router-dom'
import "../styles/paymentSuccess.css"

const  paymentSuccess = () => {

    const query = new URLSearchParams(
        useLocation().search
    );
    const reference = query.get("reference")

  return (
    <div className='payment-success-container'>
       <div className='payment-success-card'>
        <h1 className='payment-success-title'>
            Payment Successful
        </h1>
        <p className="payment-success-message">
            Successful ! Thank You for your Payment
        </p>

        {
            reference && <p className='payment-success-reference'>
                <strong>Reference Id: {reference}d</strong>
            </p>
        }
       </div>
    </div>
  )
}
export default paymentSuccess
