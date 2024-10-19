import React, { useState } from 'react';
import claases from './Bar.module.css';
import PaymentConfirmation from '../../../PaymentConfirmation/PaymentConfirmation';

export default function Bar(props) {
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);

  function paymentConfirmationHandler() {
    setShowPaymentConfirmation(true);
  }

  function closePaymentConfirmationHandler() {
    setShowPaymentConfirmation(false);
  }
  return (
    <div className={claases.Bar}>
      <div className={claases.TotalPrice}>{props.totalPrice}</div>
      <button className={claases.Button} onClick={paymentConfirmationHandler}>
        付款
      </button>
      {showPaymentConfirmation && (
        <PaymentConfirmation onClose={closePaymentConfirmationHandler} />
      )}
    </div>
  );
}
