import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';


const Home = (
  isLogged,
  ) => {
    console.log(isLogged);
  return (
    <div className="home">
      <LoginForm />
      
      {isLogged ? 
        <Link to="/nouvellepartie">
          nouvelle partie
        </Link>
         : null
      }

    </div>
   
);

};



export default Home;