import { element } from 'prop-types';
import React from 'react'
import "./Header.css"
let item=[];
let title;
const Header=(props)=> {


let mainCurrency=['USD',"EUR","PLN",'AUD','CAD','TWD']
  for(let i=0;i<mainCurrency.length;i++)
for(let j=0;j<props.currencies.length;j++)


if(mainCurrency[i]==props.currencies[j].cc){
item.push(props.currencies[j])
item.splice(mainCurrency.length,item.length-1)
}
item.map((element)=>{
 title=element.cc
})
  return (
  
  <div className='items' >
  {
item.map((element)=>(
  <div className='wrapper'>
    <div className='wpapper__title'>{element.cc}</div>
    <div className='wpapper__subtitle'>{element.txt}</div>
 <div className='wrapper__price'>{Math.ceil(element.rate*100)/100} 
 <span> UAN</span></div>
 </div>
 
))
  }
    </div>
  
     


  )
}
export default Header