import React from 'react'
import './home.css'
import Nav from '../../components/nav/nav'
import Card from '../../components/card/card'

import { supplement  } from './../../config/data'
function home() {
  return (<div className='home-page'>
    <Nav />
    <div className='home-container'>
    <div className='card-container'>
      {
        supplement.map((item)=>{
          return <Card
          Imgurl={item.Imgurl}
          
          title={item.title}
          description={item.description}
          price={item.price}
          />
        })
      }

    </div>
    </div>
    </div>
  )
}

export default home