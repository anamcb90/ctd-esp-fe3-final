import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Favs = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favs'));
    if(items)
    setItems(items);
  }, [])

  const dentist = items.map((item)=>
    <div className='card'>
      <Link to={`/Dentista/${item.id}`}>
       <img src="./images/doctor.jpg" alt="odontologo"/>
      <p>{item.name}</p>
      <p>{item.username}</p>
      </Link>
    </div>
  )

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentist}
      </div>
    </>
  );
};

export default Favs;