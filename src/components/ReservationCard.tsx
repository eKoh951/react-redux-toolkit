import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customer-slice'
import { removeReservation } from '../features/reservation-slice'
import { v4 as uuid } from 'uuid'

interface ReservationCardProps {
  name: string
  index: number
}

export default function ReservationCard({ name, index }: ReservationCardProps) {
  const dispatch = useDispatch()

  const handleRemoveCard = () => {
    dispatch(addCustomer({ name, dishes: [], id: uuid() }))
    dispatch(removeReservation(index))
  }

  return (
    <div className="reservation-card-container" onClick={handleRemoveCard}>
      {name}
    </div>
  )
}
