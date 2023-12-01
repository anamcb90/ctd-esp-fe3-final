import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer } from "react";


export const ContextGlobal = createContext();

const initialFavState = [];

const favsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      
      if (!state.some((item) => item.id === action.payload.id)) {
        return [...state, action.payload];
      } else {
        return state; 
      }
    default:
      return state;
  }
};
export const ContextProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialFavState, initFav);
  const [theme, setTheme] = useState('light');

  function initFav(initialFavState){
    return localStorage.getItem("favs")
    ? JSON.parse(localStorage.getItem("favs"))
    : initialFavState;
  }

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
  },[]);


  useEffect(() => {
    console.log("stateFavs",stateFavs)
    localStorage.setItem('favs', JSON.stringify(stateFavs))
  }, [stateFavs]);

  const changeTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    } 
  }

  return (
    <ContextGlobal.Provider value={{data,stateFavs,dispatchFavs, theme, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
 

export const useGlobalContext = () => {
  return useContext(ContextGlobal);
}