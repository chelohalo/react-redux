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
      dispatch (getHomesAction())
  }, [])
  
  return (
    <div>
      <h1>OpenDoor</h1>
      <SearchBar />
      <Map />
      <Houses />

    </div>
  )
}

export default Layout