import React from "react";
import style from './Legend.module.css';

export default function Legend() {
  return (
    <div className={style.container}>
      <span className={style.text}>Меньше</span>
      <div className={`${style.item} level0`} />
      <div className={`${style.item} level1`} />
      <div className={`${style.item} level2`} />
      <div className={`${style.item} level3`} />
      <div className={`${style.item} level4`} />
      <span className={style.text}>Больше</span>
    </div>
  )
}