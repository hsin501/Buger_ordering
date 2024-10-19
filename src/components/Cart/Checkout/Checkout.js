import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cartContext';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';

const checkoutRoot = document.getElementById('checkout-root');

export default function Checkout(props) {
  const ctx = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className={classes.Checkout}>
      <div className={classes.Close}>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            props.onHide();
          }}
        />
      </div>
      <div className={classes.MealsDetails}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>&nbsp;餐點詳情&nbsp;</h2>
        </header>
        <div className={classes.Meals}>
          {ctx.items.map((item) => (
            <CheckoutItem meal={item} key={item.id} />
          ))}
        </div>
        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>${ctx.totalPrice}</p>
        </footer>
      </div>
      <Bar totalPrice={ctx.totalPrice} />
    </div>,
    checkoutRoot
  );
}
