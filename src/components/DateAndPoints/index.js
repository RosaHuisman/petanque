import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


import "react-datepicker/dist/react-datepicker.css";
import './style.scss';


const DateAndPoints = ({
  changeScoreMax,
  setDate,
  date,
  showAddPlayerForm,
  players

}) => {

  const handleChangeScoreMax = (evt) => {
    changeScoreMax(evt.target.value);
  }

  const handleCalendar = (date) => {
    setDate(toUTC(date));
  }

  function toUTC(d) {
    return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000);
  }

  const handleStartGame = () => {
    showAddPlayerForm();
  }


  return (
    <div className="dateAndPoints">


      <div className="dateAndPoints-scoreMax">
        <label htmlFor="scoreMax" className="dateAndPoints-scoreMax-label">Jusqu'à combien de points va la partie:</label>
        <select name="scoreMax" id="scoreMax" onChange={handleChangeScoreMax} className="dateAndPoints-scoreMax-select">
            <option value="13">13</option>
            <option value="11">11</option>
            <option value="9">9</option>
            <option value="7">7</option>
        </select>
      </div>

      <div className="dateAndPoints-calendar">
        <p className="dateAndPoints-scoreMax-label"> Date : </p>
      <Calendar 
        onChange={handleCalendar} 
        value={date? new Date(date) : new Date()}
      />
      </div>
     
     {players.length === 0 &&
        <button
          type="button"
          className="dateAndPoints-button"
          onClick={handleStartGame}
          >
          C'est parti !
        </button>
      }
     
    </div>

  );

};

export default DateAndPoints;