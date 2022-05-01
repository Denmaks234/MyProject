import React from "react"
import PropTypes from "prop-types"
import "./CurrencyInput.css"

function CurrencyInput(props){
  
    return(
  
        <div className="group">
            <div className="text">{props.text}</div>

            <input className="group__input" type="number" value={props.amount} onChange={ev=>props.onAmountChange(ev.target.value)}/>
          
            <select className="select" value={props.currency} onChange={ev=>props.onCurrencyChange(ev.target.value)}>
            {props.currencies.map((currency)=>(
                
               <option value={currency.cc}>
                   {currency.cc}
               </option>
            ))}
            </select>
           
        </div>
      
    )
}

CurrencyInput.protoTypes={
    amount:PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired,
    currencies:PropTypes.array,
    onAmountChange:PropTypes.func,
    onCurrencyChange:PropTypes.func,
  }
  
export default CurrencyInput