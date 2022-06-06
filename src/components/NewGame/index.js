import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


import "react-datepicker/dist/react-datepicker.css";
import './style.scss';


const NewGame = ({
  changeScoreMax,
  setDate,
  showAddPlayerForm
  
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
    <div className="newgame">


      <div className="newgame-scoreMax">
        <label htmlFor="scoreMax" className="newgame-scoreMax-label">Jusqu'à combien de points va la partie:</label>
        <select name="scoreMax" id="scoreMax" onChange={handleChangeScoreMax} className="newgame-scoreMax-select">
            <option value="13">13</option>
            <option value="7">7</option>
        </select>
      </div>

      <div className="newgame-calendar">
        <p className="newgame-scoreMax-label"> Date : </p>
      <Calendar 
        onChange={handleCalendar} 
        />
      </div>

      <button
        type="button"
        className="newgame-button"
        onClick={handleStartGame}
        >
        C'est noté !
      </button>
     

     
    </div>

  );

};

export default NewGame;