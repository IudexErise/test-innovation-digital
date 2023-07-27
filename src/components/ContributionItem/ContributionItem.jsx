import React, { useState } from 'react';
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

  let displayedContributions;
  if (number === 1) {
    displayedContributions = '1 contribution';
  } else {
    displayedContributions = `${number} contributions`;
  }

  let year = date.substring(0, 4);
  let month = date.substring(5, 7) - 1;
  let day = date.substring(8, 10);
  let utcDate = new Date(Date.UTC(year, month, day, 0, 0, 0));
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let displayedDate = utcDate.toLocaleDateString('ru-RU', options);
  

  return (
    <div className={style.container}>
      <div className={`${style.item} ${styleClass}`} onClick={() => setShowDetails(!showDetails)} />
      {showDetails &&
        <div className={style.details}>
          <span className={style.number}>{displayedContributions}</span>
          <span className={style.date}>{displayedDate}</span>
        </div>
      }
    </div>

  );
}
