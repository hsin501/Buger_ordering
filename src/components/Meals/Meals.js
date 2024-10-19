import React from 'react';
import Meal from './Meal/Meal';
import classes from './Meals.module.css';

// 食物組件 列表
export default function Meals({ mealsData, hideDesc }) {
  // console.log(mealsData.amount);

  return (
    <div className={classes.Meals}>
      {mealsData.map((item) => (
        <Meal key={item.id} meal={item} hideDesc={hideDesc} />
      ))}
    </div>
  );
}
