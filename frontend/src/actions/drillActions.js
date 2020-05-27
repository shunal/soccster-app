export const fetchDrills = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_DRILLS'})
      fetch('http://localhost:3001/drills').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'GET_DRILLS', drills: responseJSON })
      })
    }
  }