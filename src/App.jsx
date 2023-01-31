import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')

  const validateMonth = (e) => {
    let value = e.target.value
    if (value.length > 2) return
    if (value > 12) return
    setMonth(value)
  }

  const validateYear = (e) => {
    let value = e.target.value
    if (value.length > 4) return
    if (value.length === 4 && value < 2023) {
      value = 2023
    }
    if (value > 2050) {
      value = 2050
    }
    setYear(value)
  }

  const validateCardNum = (e) => {
    let value = e.target.value
    if (value.length > 14) return
    setCardNumber(value)
  }

  const validateCVC = (e) => {
    let value = e.target.value
    if (value.length > 3) return
    setCvc(value)
  }

  return (
    <div className="App">
      <label>Cardholder Name
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>Card Number
        <input type="number" value={cardNumber} onChange={(e) => validateCardNum(e)} />
      </label>
      <br />
      <label>Exp. date
        <input type="number" value={month} onChange={(e) => validateMonth(e)} />
        <input type="number" value={year} onChange={(e) => validateYear(e)} />
      </label>
      <br />
      <label>CVC
        <input type="number" value={cvc} onChange={(e) => validateCVC(e)} />
      </label>
      <div className="nameOutput">Name: {name}</div>
      <div className="cardNumberOutput"> Card Number:{cardNumber}</div>
      <div className="dateOutput">Date: {month}/{year}</div>
      <div className="cvcOutput">CVC: {cvc}</div>
    </div>
  )
}

export default App
