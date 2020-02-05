export default (state = {}, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN":
      return {
        ...state,
        loggedIn: true
      };

    case "TURNOFF_LOGGEDIN":
      return {
        ...state,
        loggedIn: false
      };

      default:
          return state
  }
};
