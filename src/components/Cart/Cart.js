import React, { useContext, useEffect, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from '../../store/cartContext';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';

export default function Cart({ hideDesc, props }) {
  const ctx = useContext(CartContext);
  // showDetails詳請是否顯示
  const [showDetails, setShowDetails] = useState(false);

  // 在組件每次重新渲染時 檢查商品的總數量 如果為則修該改showDetails
  // 組件每次重新渲染 組件的函數體就會執行
  // 以下代碼會報錯(too many re-renders)
  // if (ctx.totalAmount === 0) {
  //   setShowDetails(false);}
  // 需使用useEffect()如下

  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  }, [ctx]);

  function toggleDetailsHandler() {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((e) => !e);
  }
  // 結帳頁顯示隱藏
  const [showCheckout, setShowCheckout] = useState(false);
  function showCheckouthandler() {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  }

  // 叉叉關閉結帳頁面
  function hideCheckHandler() {
    setShowCheckout(false);
  }

  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHide={hideCheckHandler} />}

      {/* 引入購物車詳請 */}

      {showDetails && <CartDetails hideDesc={hideDesc} />}

      {/* 購物車 */}
      <div className={classes.Icon}>
        <img src={iconImg} alt='' />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <p className={classes.NoMeal}>尚未選購商品</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}

      <button
        onClick={showCheckouthandler}
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.Disabled : ''
        }`}
      >
        結帳
      </button>
    </div>
  );
}
