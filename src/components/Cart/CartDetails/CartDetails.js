import React, { useContext, useState } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './CartDetails.module.css';
import CartContext from '../../../store/cartContext';
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../UI/Confirm/Confirm';

export default function CartDetails() {
  const ctx = useContext(CartContext);

  // 控制確認框的顯示
  const [showConfirm, setShowConfirm] = useState(false);

  function showConfirmhandler() {
    setShowConfirm(true);
  }
  function cancelHandler(e) {
    e.stopPropagation();
    setShowConfirm(false);
  }

  function okHandler() {
    // 清空購物車
    // ctx.clearCart();
    ctx.cartDispatch({ type: 'CLEAR' });
  }

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          confirmText={'確認清空購物車嗎'}
          onCancel={cancelHandler}
          onOk={okHandler}
        />
      )}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐點詳請</h2>
          <div className={classes.Clear} onClick={showConfirmhandler}>
            <FontAwesomeIcon icon={faTrash} />
            <span>清空購物車</span>
          </div>
        </header>

        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            <Meal key={item.id} meal={item} hideDesc={false} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
}
