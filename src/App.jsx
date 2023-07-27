import style from './App.module.css';
import Contributions from './components/Contributions/Contributions';
import DaysHeader from './components/DaysHeader/DaysHeader';
import MonthsHeader from './components/MonthsHeader/MonthsHeader';

function App() {
  return (
    <div className={style.container}>
      <MonthsHeader />
      <div className={style.secondaryContainer}>
        <DaysHeader />
        <Contributions />
      </div>
    </div>
  );
}

export default App;
