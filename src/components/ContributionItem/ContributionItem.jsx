import { useState } from 'react';
import style from './ContributionItem.module.css';

export default function ContributionItem({number, date}) {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.item} onClick={() => setShowDetails(!showDetails)} />
      {showDetails &&
        <div className={style.details}>
          <span className={style.number}>{number} contributions</span>
          <span className={style.date}>{date}</span>
        </div>
      }
    </div>

  );
}
