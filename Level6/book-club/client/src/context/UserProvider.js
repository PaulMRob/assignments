import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();
userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
    const initState= {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        bookposts: [],
        errMsg: "",
    }

    const [userState, setUserState] = useState(initState);
    const [allBookposts, setAllBookposts] = useState([]);

    function signup(credentials) {
      axios
        .post("/auth/signup", credentials)
        .then((res) => {
          const { user, token } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          setUserState((prevState) => ({ ...prevState, user, token }));
        })
        .catch((err) => handleAuthError(err.response.data.errMsg));
    }

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

    function logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUserState({
        user: {},
        token: "",
        bookposts: [],
      });
    }

    function handleAuthError(errMsg) {
      setUserState((prevState) => ({
        ...prevState,
        errMsg,
      }));
    }

    function resetAuthError() {
      setUserState((prevState) => ({
        ...prevState,
        errMsg: "",
      }));
    }

    function getAllBookposts() {
      userAxios
        .get("/api/bookpost")
        .then((res) => setAllBookposts(res.data))
        .catch((err) => console.log(err));
    }

    function getUserBookposts() {
      userAxios("/api/bookpost/user")
        .then((res) => {
          setUserState((prevState) => ({
            ...prevState,
            bookposts: res.data,
          }));
        })
        .catch((err) => console.log(err.response.data.errMsg));
    }

    function addBookpost(newBookpost) {
      userAxios
        .post("/api/bookpost", newBookpost)
        .then((res) => {
          setUserState((prevState) => ({
            ...prevState,
            bookposts: [...prevState.bookposts, res.data],
          }));
          setAllBookposts((prevPosts) => [...prevPosts, res.data]);
        })
        .catch((err) => console.log(err.resposne.data.errMsg));
    }

    return (
      <UserContext.Provider
        value={{
          ...userState,
          signup,
          login,
          logout,
          addBookpost,
          resetAuthError,
          userAxios,
          getUserBookposts,
          allBookposts,
        }}
      >
        {props.children}
      </UserContext.Provider>
    );
}