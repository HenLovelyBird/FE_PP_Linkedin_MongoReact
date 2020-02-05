export const logoutWithThunk = () => {
    return  (dispatch, getState) => {
      console.log(getState())
  
        dispatch({
            type: "RESET_LOGIN"
          });
    
          dispatch({
            type: "TURNOFF_LOGGEDIN"
          });
    
          localStorage.clear();
  
    
    
    };
  };
  