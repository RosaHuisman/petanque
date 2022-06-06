import React from "react";
import Field from '../../containers/Field';

import "react-datepicker/dist/react-datepicker.css";
import './style.scss';


const NewGame = ({
  changeField,
  player,
  playerId,
  addPlayer,
  players,
  showDeletePlayerForm,
  showDeleteForm,
  deletePlayer,
  showEditForm,
  showEditPlayerForm,
  editPlayer,
  round1,
  round2,
  round3,
 
  
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    players.find((existingPlayer) => existingPlayer.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === player.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) ? alert('Ce nom de joueur existe déjà, merci de le modifier') : addPlayer(); 
    
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
          { round1.length === 0 && round2.length === 0 && round3.length === 0 ? (
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
                  +
                  </button>
              </form>
          ) : null
            }
          

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
        </div>
        :
        <p> Entre le nom des joueurs</p>
        }
    </div>

  );

};

export default NewGame;