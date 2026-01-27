import React from 'react'
import CarRental from './CarRental'

const CarRentalHOC = ({carId}:{carId:string}) => {
  return (
    <div>
      <CarRental carId={carId}/>
    </div>
  )
}

export default CarRentalHOC
