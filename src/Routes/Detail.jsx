import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';


const Detail = () => {
  
  const {id} = useParams();
  const [dentist, setDentist] = useState([]);
  const {theme} = useGlobalContext();



  const getDentist = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json()
    setDentist(data);
  }

  useEffect(() => {
    getDentist(); 
  }, [dentist]);

  return (
    <div >
    <h1 >Detail Dentist id </h1>
    <table className='table'>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{dentist.name}</td>
                  <td>{dentist.email}</td>
                  <td>{dentist.phone}</td>
                  <td>{dentist.website}</td>
              </tr>
          </tbody>
          </table>
  </div>
  )
}

export default Detail