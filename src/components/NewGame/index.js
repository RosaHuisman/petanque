import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import Field from '../../containers/Field';

import "react-datepicker/dist/react-datepicker.css";import './style.scss';

import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)



const NewGame = ({
  changeField,
  player,
  handleAddPlayer,
  players,
  deletePlayer
}) => {
  const [startDate, setStartDate] = useState(new Date());
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddPlayer();
  }
  
  const handleDelete = (playerId) => {
    deletePlayer(playerId);
  }

  return (
    <div className="newgame">
      <DatePicker locale="fr" selected={startDate} onChange={(date:Date) => setStartDate(date)}   dateFormat="dd/MM/yyyy"
      />

      <form autoComplete="off" className="" onSubmit={handleSubmit}>
          <Field
            name="player"
            placeholder="Nom joueur"
            onChange={changeField}
            value={player}
          />

          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
        <ul>
          {players.map((player)=>(
              <li key={player.id}> {player.name} 
              <button
                type="button"
                className=""
                //onClick={handleDelete}
                onClick={() => handleDelete(player.id)}
              >
                supprimer
              </button>
              modifier  </li>
            )
            )}
        </ul>


    </div>

  );

};

export default NewGame;