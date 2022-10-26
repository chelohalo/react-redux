import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter'
import House from './House'

const Houses = () => {

  const homes = useSelector(state => state.homes.homesByStatus) // es un array

  console.log(homes)
  
  return (
    <div className='w-1/2'>
      <Filter />
      
      {homes.map((home, index) => 
          <>
            <House
              key={home._id} 
              images={home.images} 
              price={home.purchasePrice}
              bedroom={home.units[0].bedroom} 
              bathroom={home.units[0].bathroom} 
              squareFootage={home.units[0].squareFootage}
              streetNumber={home.addressObject.streetNumber}  
              route={home.addressObject.route} 
              locality={home.addressObject.locality}  
              stateCode={home.addressObject.stateCode}  
            />
            {index===1 && <h1>Make your strongest offer</h1>}
          </>
        
      )}
    </div>
  )
}

export default Houses