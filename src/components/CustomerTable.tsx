import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDishToTable } from '../features/customer-slice'

interface CustomerTableProps {
  id: string
  name: string
  dishes: string[]
}

const CustomerTable = ({ id, name, dishes }: CustomerTableProps) => {
  const [dish, setDish] = useState('')
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDishChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDish(e.target.value)
  }

  const handleAddDish = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!dish) return

    const newDish = dish.trim()
    dispatch(addDishToTable({ dish: newDish, id }))
    setDish('')
    inputRef.current?.focus()
  }

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        {dishes.map((dish) => (
          <div className="customer-food">{dish}</div>
        ))}
        <form
          onSubmit={handleAddDish}
          className="customer-food-input-container"
        >
          <input value={dish} onChange={handleDishChange} ref={inputRef} />
          <button>Add</button>
        </form>
      </div>
    </div>
  )
}

export default CustomerTable
