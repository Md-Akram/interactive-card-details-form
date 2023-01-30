import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState()
  const [cardNumber, setCardNumber] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [cvc, setCvc] = useState()

  return (
    <div className="App">
      <label>Cardholder Name
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>Card Number
        <input type="number" onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <br />
      <label>Exp. date
        <input type="number" onChange={(e) => setMonth(e.target.value)} />
        <input type="number" onChange={(e) => setYear(e.target.value)} />
      </label>
      <br />
      <label>CVC
        <input type="number" onChange={(e) => setCvc(e.target.value)} />
      </label>
      <div className="nameOutput">Name: {name}</div>
      <div className="cardNumberOutput"> Card Number:{cardNumber}</div>
      <div className="dateOutput">Date: {month}/{year}</div>
      <div className="cvcOutput">CVC: {cvc}</div>
    </div>
  )
}

export default App
