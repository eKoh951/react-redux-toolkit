import './App.css'
import React, { FormEvent, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './app/store'
import ReservationCard from './components/ReservationCard'
import { addReservation } from './features/reservation-slice'
import CustomerTable from './components/CustomerTable'

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  )

  const customers = useSelector((state: RootState) => state.customers.value)

  const dispatch = useDispatch()

  const handleAddReservation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!reservationNameInput) return

    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
    inputRef.current?.focus()
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard name={name} index={index} />
              ))}
            </div>
          </div>
          <form
            onSubmit={handleAddReservation}
            className="reservation-input-container"
          >
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value)
              }}
              ref={inputRef}
            />
            <button>Add</button>
          </form>
        </div>
        <div className="customer-food-container">
          {customers.map((props) => (
            <CustomerTable {...props} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
