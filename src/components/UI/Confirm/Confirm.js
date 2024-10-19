import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.css';

export default function Confirm(props) {
  return (
    <Backdrop className={classes.ConfirmOuter} onClick={props.onCancel}>
      <div className={classes.Confirm}>
        <p className={classes.ConfirmText}>{props.confirmText}?</p>
        <div className={classes.ButtonContainer}>
          <button
            className={classes.Cancel}
            onClick={(e) => {
              props.onCancel(e);
            }}
          >
            取消
          </button>
          <button
            className={classes.Ok}
            onClick={(e) => {
              props.onOk(e);
            }}
          >
            確認
          </button>
        </div>
      </div>
    </Backdrop>
  );
}
