import React from "react";
import { useHistory } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import Field from '../../containers/Field';

import "react-datepicker/dist/react-datepicker.css";
import './style.scss';




const NewGame = ({
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
  makeGame,
  clearNewGameState,
  
}) => {

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

  let history = useHistory();

  const handleMakeGame = () => {
    makeGame(players);
    clearNewGameState();
    history.push("/jeu");
  }

  return (
    <div className="newgame">

    

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

        {players.length}
        
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
        
                <button
                  type="button"
                  className=""
                  onClick={handleMakeGame}
                  Redirect="/jeu"
                >
                  Tout est ok
                </button>
        
    </div>

  );

};

export default NewGame;