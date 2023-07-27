import style from './Contributions.module.css';
import ContributionItem from './../ContributionItem/ContributionItem';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Contributions() {

  const [contributionsData, setContributionsData] = useState();
  const [entries, setEntries] = useState([])

  const getData = async () => {
    try {
      let response = await axios.get('https://dpg.gg/test/calendar.json');
      let json = Object.entries(response.data);
      setEntries(json.map(item => ({ 
        date: item[0], 
        number: item[1] 
      })));
    } catch (error) {
      console.log(error);
    }
  }

  let data = entries.map(item => {
    return (
      <ContributionItem date={item.date} number={item.number} key={item.date} />
    )
  })

 useEffect(() => {
    getData();
  }, []) 

  return (
    <div className={style.container}>
      {data}
    </div>
  );
}
