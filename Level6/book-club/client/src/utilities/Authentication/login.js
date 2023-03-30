import React from 'react'

const login = () => {

function login(credentials) {
  axios
    .post("/auth/login", credentials)
    .then((res) => {
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      getUserBookposts();
      getAllBookposts();
      setUserState((prevUserState) => ({ ...prevUserState, user, token }));
    })
    .catch((err) => handleAuthError(err.response.data.errMsg));
}
  return 
}

export default login