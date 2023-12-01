import React from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context.jsx'

const Home = () => {

  const {data} = useGlobalContext();

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {console.log(data)}
        {data?.map((item) => <Card key={item.id} item={item}/>)}
      </div>
    </main>
  )
}

export default Home