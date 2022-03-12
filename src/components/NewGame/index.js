import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import Field from '../../containers/Field';

import "react-datepicker/dist/react-datepicker.css";
import './style.scss';

import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)



const NewGame = ({
  setGameDate,
  date,
  changeField,
  player,
  playerId,
  handleAddPlayer,
  players,
  showDeletePlayerForm,
  showDeleteForm,
  deletePlayer,
  showEditForm,
  showEditPlayerForm,
  editPlayer,
  
}) => {
  
  const setDate = (date) => {
    setGameDate(date);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddPlayer();
  }

  const handleDeleteForm = (evt) => {
    evt.preventDefault();
    showDeleteForm(evt.target.id);
  }
  
  const handleDelete = (playerId) => {
    deletePlayer(playerId);
  }

  const handleEdit = (evt) => {
    evt.preventDefault();
    showEditForm(evt.target.id);
  }
  const handleEditPlayer = (evt) => {
    evt.preventDefault();
    editPlayer(playerId);
  }


  return (
    <div className="newgame">

    <DatePicker locale="fr" selected={date} onChange={(date:Date)=>setDate(date)} dateFormat="dd/MM/yyyy"
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
                
                {(playerId == player.id && showDeletePlayerForm) ? (
                  <form 
                    autoComplete="off" 
                    className="" 
                    onSubmit={handleEditPlayer}
                    {...player}
                  >
                    <p> Sûr ? </p>
        
                <button
                  type="button"
                  className=""
                  onClick={() => handleDelete(player.id)}
                >
                  Oui
                </button>
                  <button
                    type="button"
                    className=""
                    onClick={handleDelete}
                  >
                    Non
                  </button>
                </form>
                ) : (
                  <button
                  type="button"
                  className=""
                  {...player}
                  onClick={handleDeleteForm}
                >
                  supprimer
                </button>
                )}

                  {(playerId == player.id && showEditPlayerForm) ? (
                  <form 
                    autoComplete="off" 
                    className="" 
                    onSubmit={handleEditPlayer}
                    {...player}
                  >
                  <Field
                    name="editPlayer"
                    placeholder="Nouveau nom joueur"
                    onChange={changeField}
                    value={player}
                  />
        
                  <button
                    type="submit"
                    className=""
                  >
                    OK
                  </button>
                  <button
                    type="button"
                    className=""
                    onClick={handleEdit}
                  >
                    Annuler
                  </button>
                </form>
                ) : (
                  <button
                  type="button"
                  className=""
                  {...player}
                  onClick={handleEdit}
                >
                  modifier
                </button>
                )}
                
                 
              
               </li>
            )
            )}
        </ul>


    </div>

  );

};

export default NewGame;