import React from "react";
import { useGlobalContext } from './utils/global.context.jsx'
import { Link } from 'react-router-dom'
import {useState} from "react";


const Card = ({item}) => {

  const { dispatchFavs } = useGlobalContext();
  const [star, setStar] = useState('true');

  const addFav = (item) => {
    dispatchFavs({type: 'ADD_FAV', payload: item});
   
  }

  const changeStar = () => {
    if(star === 'true'){
      setStar('false')
    }else{
      setStar('true')
    } 
  }
  
  return (
    <div key={item.id} className="card">
        <Link to={`/Dentista/${item.id}`}>
          <img src="./images/doctor.jpg" alt="odontologo"/>
          <h3 >{item.name}</h3>
          <p >{item.username}</p>
        </Link>  
          
        <button onClick={() => {addFav(item); changeStar()}} className="favButton">{star === 'true' ? <img src= '../../images/favorito2.png' alt='dark'/> : <img src= '../../images/favorito1.png'  alt='favButton'/>}</button>
                

    </div>
  );
};

export default Card;
