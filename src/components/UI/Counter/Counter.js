import React, { useContext } from 'react';
import classes from './Counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cartContext';

/*
引入fontawesome
1.安裝依賴
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome
2.引入組件
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
3.引入圖標
去官網查
4.使用組件
*/

const Counter = ({ meal, className }) => {
  // 獲取cartContext
  const cartCtx = useContext(CartContext);

  function addButtonHandler() {
    // onAdd(meal);
    // cartCtx.addItem(meal);
    cartCtx.cartDispatch({ type: 'ADD', meal: meal });
  }

  function subButtonHandler() {
    // onSub(meal);
    if (meal.amount > 0) {
      // cartCtx.removeItem(meal);
      cartCtx.cartDispatch({ type: 'REMOVE', meal: meal });
    }
  }
  // console.log(meal.amount);
  return (
    <div className={`${classes.Counter} ${className || ''}`}>
      {meal.amount && meal.amount !== 0 ? (
        <>
          <button className={classes.Sub} onClick={subButtonHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.count}>{meal.amount}</span>
        </>
      ) : null}

      <button className={classes.Add} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
