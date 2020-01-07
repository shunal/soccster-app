const drillsReducer = (state = { drills: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_DRILLS':
        return {
          ...state,
          drills: [...state.drills],
          loading: true
        }
      case 'ADD_DRILL':
        return {
          ...state,
          drills: action.drills,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default drillsReducer;