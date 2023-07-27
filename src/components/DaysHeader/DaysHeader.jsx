import style from './DaysHeader.module.css';

export default function DaysHeader() {
  return (
    <div className={style.container}>
      <span className={style.text}>Пн</span>
      <span className={style.text}>Ср</span>
      <span className={style.text}>Пт</span>
    </div>
  );
}

