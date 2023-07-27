import { useState } from 'react';
import style from './ContributionItem.module.css';

export default function ContributionItem({number, date}) {

  const [showDetails, setShowDetails] = useState(false);
  let styleClass;
  if (number === 0) {
    styleClass = 'level0';
  } else if (1 <= number && number <= 9) {
    styleClass = 'level1';
  } else if (10 <= number && number <= 19) {
    styleClass = 'level2';
  } else if (20 <= number && number <= 29) {
    styleClass = 'level3';
  } else {
    styleClass = 'level4';
  }
  

  return (
    <div className={style.container}>
      <div className={`${style.item} ${styleClass}`} onClick={() => setShowDetails(!showDetails)} />
      {showDetails &&
        <div className={style.details}>
          <span className={style.number}>{number} contributions</span>
          <span className={style.date}>{date}</span>
        </div>
      }
    </div>

  );
}
