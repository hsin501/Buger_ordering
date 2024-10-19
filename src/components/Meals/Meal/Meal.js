import React from 'react';
import classes from './Meal.module.css';
import Counter from '../../UI/Counter/Counter';

// 食物訊息
export default function Meal({ meal, hideDesc }) {
  // console.log(meal.amount);
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src={meal.img} alt='' />
      </div>
      <div className={classes.DescBox}>
        <h2 className={classes.Title}>{meal.title}</h2>
        {hideDesc && <p className={classes.Desc}>{meal.desc}</p>}
        <div className={classes.PriceAndNum}>
          <span className={classes.Price}>價格 NT${meal.price}</span>
          <Counter meal={meal} />
        </div>
      </div>
    </div>
  );
}
