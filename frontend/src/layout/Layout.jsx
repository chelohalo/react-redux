import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getHomesAction } from '../actions/homesActions'
import SearchBar from '../components/SearchBar'
import Houses from '../components/Houses'
import Map from '../components/Map'


const Layout = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
      dispatch ( getHomesAction() )
  }, [])
  
  return (
    <div>
      <div className='md:w-2/3 m-auto pt-10 pb-5 flex justify-around'>
        <h1 className='text-blue-700 font-bold text-lg py-auto'>OpenDoor</h1>
        <SearchBar />
      </div>
      <Map />
      <Houses />

    </div>
  )
}

export default Layout