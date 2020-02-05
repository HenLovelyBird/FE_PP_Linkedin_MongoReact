export const loginWithThunk = (username, password) => {
  return async (dispatch, getState) => {
    const response = await `http://localhost:7000/profiles/username/${username}`;

    const json = await response.json();

    if (json.ok) {
      dispatch({
        type: "SET_LOGIN",
        payload: {
          user: username,
          pass: password
        }
      });

      dispatch({
        type: "SET_LOGGEDIN"
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      dispatch({
        type: "RESET_LOGIN"
      });

      dispatch({
        type: "TURNOFF_LOGGEDIN"
      });

      localStorage.clear();
    }

    //     if (response.ok){
    //       ? this.setState({
    //           loggedIn: true,
    //           currentuser: localStorage.getItem("username"),
    //           currentpass: localStorage.getItem("password")
    //         })
    //       : this.setState({ loggedIn: false });
    //   }
    //   else {
    //     this.setState({ loggedIn: false });
    //   }
  };
};
