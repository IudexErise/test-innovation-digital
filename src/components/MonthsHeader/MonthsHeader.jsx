import style from './MonthsHeader.module.css';

export default function MonthsHeader() {
  return (
    <div className={style.container}>
      <span className={style.text}>Авг.</span>
      <span className={style.text}>Сент.</span>
      <span className={style.text}>Окт.</span>
      <span className={style.text}>Нояб.</span>
      <span className={style.text}>Дек.</span>
      <span className={style.text}>Янв.</span>
      <span className={style.text}>Фев.</span>
      <span className={style.text}>Март</span>
      <span className={style.text}>Апр.</span>
      <span className={style.text}>Май</span>
      <span className={style.text}>Июнь</span>
      <span className={style.text}>Июль</span>
    </div>
  );
}

