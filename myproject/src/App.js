
import './App.css';
import CurrencyInput from './component/CurrencyInput/CurrencyInput';
import {useState,useEffect} from "react"
import Header from './component/Header/Header';


function App() {

  let [amount1,setAmount1]=useState(0)
 let [amount2,setAmount2]=useState(0)
  const[currency1,setCurrency1]=useState('USD')
  const[currency2,setCurrency2]=useState("USD")
  const[rates,setRates]=useState([])
  let [result,setResult]=useState({})
  let rateCurrency2;
  let rateCurrency1;


// Получаемо API з сервера
useEffect(()=>{
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
.then(data=>{
  
  return data.json()

})
.then(data=>{ 
  

 setRates(data)
})
},[])




// Робимо калькулятор по input1
function handletAmount1Change(amount1){
  rates.map((item)=>{
  if(item.cc==currency1){
      rateCurrency1=item.rate
      return rateCurrency1
   }
   if(item.cc==currency2){
      rateCurrency2=item.rate
     return rateCurrency2
   }


 setAmount1(amount1)
  })

console.log(amount1)
amount1=Number(amount1)
setAmount2(amount1*rateCurrency1/rateCurrency2)
if(currency1===currency2){
setAmount2(Math.ceil(amount1*100)/100)
}
}








// Робимо калькулятор по select1
function handletCurrenty1Change(currency1){
  rates.map((item)=>{
  if(item.cc==currency1){
      rateCurrency1=item.rate
      return rateCurrency1
   }
   if(item.cc==currency2){
      rateCurrency2=item.rate
     return rateCurrency2
   }
   
 setCurrency1(currency1)
  })



  
amount1=Number(amount1)
setAmount2(amount1*rateCurrency1/rateCurrency2)
if(currency1===currency2){
  setAmount2(Math.ceil(amount1*100)/100)
  }
}




// Робимо калькулятор по input2
function handletAmount2Change(amount2){
  rates.map((item)=>{
  if(item.cc==currency1){
      rateCurrency1=item.rate
      return rateCurrency1
   }
   if(item.cc==currency2){
      rateCurrency2=item.rate
     return rateCurrency2
   }
 setAmount2(amount2)
  })
  
amount2=Number(amount2)
setAmount1(amount2*rateCurrency2/rateCurrency1)
if(currency1===currency2){
  setAmount1(Math.ceil(amount2*100)/100)
  }
}





// Робимо калькулятор по select2
function handletCurrenty2Change(currency2){
  rates.map((item)=>{
  if(item.cc==currency1){
      rateCurrency1=item.rate
      return rateCurrency1
   }
   if(item.cc==currency2){
      rateCurrency2=item.rate
     return rateCurrency2
   }
 setCurrency2(currency2)
  })

  
amount2=Number(amount2)
setAmount2(amount1*rateCurrency1/rateCurrency2)
if(currency1===currency2){
  setAmount2(Math.ceil(amount1*100)/100)
  }
}





  return (
    
    <div className="App">
   <Header currencies={rates} />
      <CurrencyInput  text={'Я маю'}onCurrencyChange={handletCurrenty1Change} currencies={rates} amount={Math.ceil(amount1*100)/100} currency={currency1} onAmountChange={handletAmount1Change} />
      <CurrencyInput  text={'Я отримаю'} onCurrencyChange={handletCurrenty2Change}currencies={rates}  amount={Math.ceil(amount2*100)/100} currency={currency2} onAmountChange={handletAmount2Change} />
  
    </div>
  );
}



export default App;
