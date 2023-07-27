import style from './Contributions.module.css';
import ContributionItem from './../ContributionItem/ContributionItem';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Contributions() {

  const [entries, setEntries] = useState([]);

  const getData = async () => {
    try {
      let response = await axios.get('https://dpg.gg/test/calendar.json');
      let json = Object.entries(response.data);
      setEntries(json.map(item => ({
        date: item[0],
        number: item[1]
      })));
    } catch (error) {
      alert('Не удалось получить данные');
    }
  }

  const filter8 = entries.filter(entry => entry.date.substring(5, 7) === '08');
  const filter8Data = filter8.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter9 = entries.filter(entry => entry.date.substring(5, 7) === '09');
  const filter9Data = filter9.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter10 = entries.filter(entry => entry.date.substring(5, 7) === '10');
  const filter10Data = filter10.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter11 = entries.filter(entry => entry.date.substring(5, 7) === '11');
  const filter11Data = filter11.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter12 = entries.filter(entry => entry.date.substring(5, 7) === '12');
  const filter12Data = filter12.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter1 = entries.filter(entry => entry.date.substring(5, 7) === '01');
  const filter1Data = filter1.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter2 = entries.filter(entry => entry.date.substring(5, 7) === '02');
  const filter2Data = filter2.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter3 = entries.filter(entry => entry.date.substring(5, 7) === '03');
  const filter3Data = filter3.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter4 = entries.filter(entry => entry.date.substring(5, 7) === '04');
  const filter4Data = filter4.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  const filter5 = entries.filter(entry => entry.date.substring(5, 7) === '05');
  const filter5Data = filter5.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  let filter6 = [
    { date: '2023-06-01', number: 0 },
    { date: '2023-06-02', number: 0 },
    { date: '2023-06-03', number: 0 },
    { date: '2023-06-04', number: 0 },
    { date: '2023-06-05', number: 0 },
    { date: '2023-06-06', number: 0 },
    { date: '2023-06-07', number: 0 },
    { date: '2023-06-08', number: 0 },
    { date: '2023-06-09', number: 0 },
    { date: '2023-06-10', number: 0 },
    { date: '2023-06-11', number: 0 },
    { date: '2023-06-12', number: 0 },
    { date: '2023-06-13', number: 0 },
    { date: '2023-06-14', number: 0 },
    { date: '2023-06-15', number: 0 },
    { date: '2023-06-16', number: 0 },
    { date: '2023-06-17', number: 0 },
    { date: '2023-06-18', number: 0 },
    { date: '2023-06-19', number: 0 },
    { date: '2023-06-20', number: 0 },
    { date: '2023-06-21', number: 0 },
    { date: '2023-06-22', number: 0 },
    { date: '2023-06-23', number: 0 },
    { date: '2023-06-24', number: 0 },
    { date: '2023-06-25', number: 0 },
    { date: '2023-06-26', number: 0 },
    { date: '2023-06-27', number: 0 },
    { date: '2023-06-28', number: 0 },
    { date: '2023-06-29', number: 0 },
    { date: '2023-06-30', number: 0 },
  ]
  const filter6Data = filter6.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })

  let month7 = [
    { date: '2023-07-01', number: 0 },
    { date: '2023-07-02', number: 0 },
    { date: '2023-07-03', number: 0 },
    { date: '2023-07-04', number: 0 },
    { date: '2023-07-05', number: 0 },
    { date: '2023-07-06', number: 0 },
    { date: '2023-07-07', number: 0 },
    { date: '2023-07-08', number: 0 },
    { date: '2023-07-09', number: 0 },
    { date: '2023-07-10', number: 0 },
    { date: '2023-07-11', number: 0 },
    { date: '2023-07-12', number: 0 },
    { date: '2023-07-13', number: 0 },
    { date: '2023-07-14', number: 0 },
    { date: '2023-07-15', number: 0 },
    { date: '2023-07-16', number: 0 },
    { date: '2023-07-17', number: 0 },
    { date: '2023-07-18', number: 0 },
    { date: '2023-07-19', number: 0 },
    { date: '2023-07-20', number: 0 },
    { date: '2023-07-21', number: 0 },
    { date: '2023-07-22', number: 0 },
    { date: '2023-07-23', number: 0 },
    { date: '2023-07-24', number: 0 },
    { date: '2023-07-25', number: 0 },
    { date: '2023-07-26', number: 0 },
    { date: '2023-07-27', number: 0 },
    { date: '2023-07-28', number: 0 },
    { date: '2023-07-29', number: 0 },
    { date: '2023-07-30', number: 0 },
    { date: '2023-07-31', number: 0 },
  ]
  const date = new Date();
  let day = date.getDate();
  const filter7 = month7.filter(entry => Number(entry.date.substring(8, 10)) <= day);
  const filter7Data = filter7.map((item, index) => {
    return (
      <ContributionItem date={item.date} number={item.number} key={index} />
    )
  })




  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={style.container}>
      <div className={style.block}>
        {filter8Data}
      </div>
      <div className={style.block}>
        {filter9Data}
      </div>
      <div className={style.block}>
        {filter10Data}
      </div>
      <div className={style.block}>
        {filter11Data}
      </div>
      <div className={style.block}>
        {filter12Data}
      </div>
      <div className={style.block}>
        {filter1Data}
      </div>
      <div className={style.block}>
        {filter2Data}
      </div>
      <div className={style.block}>
        {filter3Data}
      </div>
      <div className={style.block}>
        {filter4Data}
      </div>
      <div className={style.block}>
        {filter5Data}
      </div>
      <div className={style.block}>
        {filter6Data}
      </div>
      <div className={style.block}>
        {filter7Data}
      </div>
    </div>
  );
}
