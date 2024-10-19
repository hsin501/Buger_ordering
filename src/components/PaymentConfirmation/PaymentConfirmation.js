import React, { useContext } from 'react';

import styles from './PaymentConfirmation.module.css';
import CartContext from '../../store/cartContext';

function PaymentConfirmation({ onClose }) {
  const ctx = useContext(CartContext);

  function closeHandler() {
    onClose();
    ctx.cartDispatch({ type: 'CLEAR' });
  }

  return (
    <div className={styles.Overlay}>
      <div className={styles.Confirmation}>
        <div className={styles['success-checkmark']}>
          <div className={styles['check-icon']}>
            <span
              className={`${styles['icon-line']} ${styles['line-tip']}`}
            ></span>
            <span
              className={`${styles['icon-line']} ${styles['line-long']}`}
            ></span>
            <div className={styles['icon-circle']}></div>
            <div className={styles['icon-fix']}></div>
          </div>
        </div>
        <p>付款完成</p>
        <p>感謝您的訂購💕</p>
        <button className={styles.button} onClick={closeHandler}>
          關閉
        </button>
      </div>
    </div>
  );
}

export default PaymentConfirmation;
