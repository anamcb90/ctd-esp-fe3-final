import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from './utils/global.context';

const Navbar = () => {

  const {theme, changeTheme} = useGlobalContext();

  return (
    <nav className='nav'>
      <p><span>D</span>H Odonto</p>
     
      <div  class= 'elements-nav'>
      <Link to={'/Home'}><h4 >Home</h4></Link>
      <Link to={'/Contact'}><h4 >Contact</h4></Link>
      <Link to={'/Favs'}><h4 >Favs</h4></Link> 
      <button onClick={() => changeTheme()}>{theme === 'light' ? <img src= '../../images/luna.png' alt='dark'/> : <img src= '../../images/sol.png'  alt='ligth'/>}</button>
      </div>
      
      
    </nav>
  )
}

export default Navbar