import React from "react";
import style from './App.module.css';
import Contributions from './components/Contributions/Contributions';
import DaysHeader from './components/DaysHeader/DaysHeader';
import MonthsHeader from './components/MonthsHeader/MonthsHeader';
import Legend from "./components/Legend/Legend";

function App() {
  return (
    <div className={style.container}>
      <MonthsHeader />
      <div className={style.secondaryContainer}>
        <DaysHeader />
        <Contributions />
      </div>
      <Legend />
    </div>
  );
}

export default App;
