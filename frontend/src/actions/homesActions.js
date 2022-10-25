import axios from 'axios'
import { 
  START_HOMES_RETRIEVE,
  RETRIEVE_HOMES_OK,
  RETRIEVE_HOMES_ERROR,    
  // FILTER_PLANETS
} from '../types'

export function getHomesAction() {
    return async (dispatch) => {
        dispatch ( getHomes() )

        try {
            const {data} = await axios.get('http://localhost:4000/')
            dispatch ( getHomesOk(data) )          
            
        } catch (error) {
            dispatch ( getHomesError(error) )
        }
    } 
}

// export function filterPlanetsAction(keyword) {
//     return async (dispatch) => {
//         dispatch (getFilteredPlanets(keyword))
//     }
// }

const getHomes = () => ({
    type: START_HOMES_RETRIEVE,
    payload: true
})

const getHomesOk = (homes) => ({
    type: RETRIEVE_HOMES_OK,
    payload: homes
})

const getHomesError = () => ({
    type: RETRIEVE_HOMES_ERROR,
    payload: true
})

// const getFilteredPlanets = (keyword) => ({
//     type: FILTER_PLANETS,
//     payload: keyword
// })