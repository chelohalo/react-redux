import { useDispatch, useSelector } from "react-redux"
// import { filterPlanetsAction } from "../actions/planetsActions"
import { useEffect, useState } from "react"
import { getHomesAction } from "../actions/homesActions"

const SearchBar = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()


  useEffect(()=> {
      dispatch (getHomesAction(input))
  }, [])
  

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //dispatch(filterHomesAction(input))
  }

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Type a planet..." onChange={handleChange} className='input__box' />
        <input type='submit' value='Search' />

      </form>
    </>
  )
}

export default SearchBar