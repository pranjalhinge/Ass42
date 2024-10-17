import React, { useState, useEffect } from 'react'
import './card.css'
import PlusImg from './add.png'
import MinusImg from './minus-button.png'
import Img1 from './1.png'
import Img2 from './2.png'
import Logo from './cup.avif'
function card(props) {
  const [count, setCount] = useState(1)
  const Counter = () => { 
    if (count < 0) {
      alert("you can't add less than 0")
      return;
    }
    else if( count >=6){
      alert("you can't add more than 6")
      return;
    }
    setCount(count + 1);
    console.log(count)
  }
  return (
    <div className='card'>
      <img src={props.Imgurl} alt="hey" className='imgsupp' />
      <img src={Logo} alt="hey" className='imgcard' />
      <h1 className='title'>{props.title}</h1>
      <p>{props.description}</p>
      {
        props.price ? <p className='price'> ₹ {props.price}</p> : "NA"
      }
      
      <div className='counter'>
        <img src={MinusImg} alt="hey" className='imgbtn'  onClick={()=>{ if(count <=0){
          alert("you can't add less than 0")
          return;
        }
      setCount(count - 1);
        
      }
        
        }/>
        <span className='count'>{count}</span>
        <img src={PlusImg} alt="hey" className='imgbtn'  onClick={Counter }/>
      </div>
        <button className='btn-add' type='button' onClick={Counter} > Add to card</button>
      
    </div>
  )
}

export default card