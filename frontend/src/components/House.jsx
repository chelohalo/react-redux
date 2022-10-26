import React from 'react'
import Carousel from './Carousel'

const House = ({ images, price, bedroom, bathroom, squareFootage, streetNumber, route, locality, stateCode }) => {

  return (
    <div className='flex m-5 h-48 rounded-lg shadow md:w-1/1 '>
      {/* <Carousel images={images} /> */}
      <img 
        src={images[0]} 
        className='w-1/2 rounded-lg object-contain object-left'/>
      <div className='flex flex-col justify-center'>
        <p className='p-2 font-bold'>$ {price} </p>
        <div className='p-2 flex flex-row text-sm'>
          <p className=''>{bedroom}bd</p>
          <p className='mx-4'>{bathroom}ba</p>
          <p className=''>{squareFootage} ft &#178;</p>
        </div>
        <div className='p-2 flex flex-row text-sm'>
          <p className='mr-2'>{streetNumber}</p>
          <p className='ml-2'>{route}</p>
        </div>
        <div className='p-2 flex flex-row text-sm'>
          <p>{locality}</p>
          <p>{', '} { stateCode}</p>
        </div>
      </div>
    </div>
  )
}

export default House

