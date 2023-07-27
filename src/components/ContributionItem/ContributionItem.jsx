import { useState } from 'react';
import style from './ContributionItem.module.css';

export default function ContributionItem() {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.item} onClick={() => setShowDetails(!showDetails)} />
      {showDetails &&
        <div className={style.details}>
          <span className={style.number}>25 contributions</span>
          <span className={style.date}>Четверг, Ноябрь 28, 2022</span>
        </div>
      }
    </div>

  );
}
