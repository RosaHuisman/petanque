import React from "react";
import { useHistory } from 'react-router-dom';
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
   players.find((existingPlayer) => existingPlayer.name.toLowerCase() === player.toLowerCase()) ? alert('Ce nom de joueur existe déjà, merci de le modifier') : handleAddPlayer(); 
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
      <form autoComplete="off" className="newgame-form" onSubmit={handleSubmit}>
          <Field
            name="player"
            placeholder="Nom joueur"
            onChange={changeField}
            value={player}
            className="newgame-form-input"
          />          
            <button
              type="submit"
              className="newgame-form-button"
              >
              OK
              </button>
        </form>

        { players.length > 0 ?
        <div className="newgame-list">
        <p className="newgame-list-total"> Nombre total de joueurs : <b>{players.length}</b></p>
        
        <div>
          {players.map((player)=>(
              <div key={player.id} className="newgame-list-player"> <span className="newgame-list-player-name"> {player.name} </span>
                
                {(Number(playerId) === Number(player.id) && showDeletePlayerForm) ? (
                  <form 
                    autoComplete="off" 
                    className="" 
                    onSubmit={handleEditPlayer}
                    {...player}
                  >
                    <span> Supprimer ? </span>
        
                <button
                  type="button"
                  className="newgame-list-player-edit-button"
                  onClick={() => handleDelete(player.id)}
                >
                  Oui
                </button>
                  <button
                    type="button"
                    className="newgame-list-player-edit-button"
                    onClick={handleDelete}
                  >
                    Non
                  </button>
                </form>
                ) : (
                  <button
                  type="button"
                  className="newgame-list-player-button bi bi-trash3"
                  {...player}
                  onClick={handleDeleteForm}
                >
                </button>
                )}

                  {(Number(playerId) === Number(player.id) && showEditPlayerForm) ? (
                  <form 
                    autoComplete="off" 
                    className="newgame-list-player-edit" 
                    onSubmit={handleEditPlayer}
                    {...player}
                  >
                  <Field
                    name="editPlayer"
                    placeholder="Nouveau nom joueur"
                    onChange={changeField}
                    value={player}
                    className="newgame-list-player-edit-input"
                  />
        
                  <button
                    type="submit"
                    className="newgame-list-player-edit-button"
                  >
                    OK
                  </button>
                  <button
                    type="button"
                    className="newgame-list-player-edit-button"
                    onClick={handleEdit}
                  >
                    Annuler
                  </button>
                </form>
                ) : (
                  <button
                  type="button"
                  className="newgame-list-player-button bi bi-pencil-fill"
                  {...player}
                  onClick={handleEdit}
                >
                </button>
                )}
               </div>
            )
            )}
        </div>
        
                <button
                  type="button"
                  className="newgame-list-player-edit-button"
                  onClick={handleMakeGame}
                  Redirect="/jeu"
                >
                  Tout est ok
                </button>
        </div>
        :
        <p> Entre le nom des joueurs</p>
        }
    </div>

  );

};

export default NewGame;