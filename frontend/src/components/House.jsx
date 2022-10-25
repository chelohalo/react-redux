import React from 'react'
import Carousel from './Carousel'

const House = ({ images, price, bedroom, bathroom, squareFootage, streetNumber, route, locality, stateCode }) => {

  return (
    <div className='flex rounded-lg shadow md:w-1/2'>
      {/* <Carousel images={images} /> */}
      <div className='flex flex-col'>
        <p className='p-2'>$ {price} </p>
        <div className='p-2 flex flex-row'>
          <p>{bedroom}</p>
          <p>{bathroom}</p>
          <p>{squareFootage}</p>
        </div>
        <div className='p-2 flex flex-row'>
          <p>{streetNumber}</p>
          <p>{route}</p>
        </div>
        <div className='p-2 flex flex-row'>
          <p>{locality}</p>
          <p>{stateCode}</p>
        </div>
      </div>
    </div>
  )
}

export default House

