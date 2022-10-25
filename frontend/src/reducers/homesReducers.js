import { 
  START_HOMES_RETRIEVE,
  RETRIEVE_HOMES_OK,
  RETRIEVE_HOMES_ERROR,    
  // FILTER_PLANETS
} from '../types'

const initialState = {
  homes: [],
  // planetsFiltered:[],
  error: false,
  loading: false,
  loaded: false
}

const homesReducers = function (state = initialState, action) {
  switch (action.type) {
      case START_HOMES_RETRIEVE:
        return {
              ...state,
              error: false,
              loading: action.payload
          }
      case RETRIEVE_HOMES_OK:
        return {
              ...state,
              homes: action.payload,
              // planetsFiltered: action.payload,
              loading: false,
              loaded: true,
          }
      case RETRIEVE_HOMES_ERROR:
        return {
              ...state,
              error: action.payload,
              loading: false
          }
      // case FILTER_PLANETS: {
      //     return {
      //         ...state,
      //         planetsFiltered: state.planets.filter(planet => planet.name.toLowerCase().startsWith(action.payload.toLowerCase()))
      //     }
      // }
      default: 
          return {
              ...state
          }
  }
}

export default homesReducers