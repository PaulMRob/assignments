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
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    posts: [],
    errMsg: "",
  };

  const [userState, setUserState] = useState(initState);
  const [allPosts, setAllPosts] = useState([]);

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
        getUserPosts();
        getAllPosts();
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
      posts: [],
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

  function getAllPosts() {
    userAxios
      .get("/api/polipost")
      .then((res) => setAllPosts(res.data))
      .catch((err) => console.log(err));
  }

  function getUserPosts() {
    userAxios("/api/polipost/user")
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          posts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addPost(newPost) {
    userAxios
      .post("/api/polipost", newPost)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          posts: [...prevState.posts, res.data],
        }));
        setAllPosts((prevPosts) => [...prevPosts, res.data]);
      })
      .catch((err) => console.log(err.resposne.data.errMsg));
  }

  function upVote(postId) {
    userAxios
      .put(`/api/polipost/${postId}/upvote`)
      .then((res) => {
        // console.log(res.data);
        setAllPosts((prevPosts) =>
          prevPosts.map((post) => (postId !== post._id ? post : res.data))
        );
        setUserState((prevUserState) => ({
          ...prevUserState,
          posts: prevUserState.posts.map((post) =>
            postId !== post._id ? post : res.data
          ),
        }));
        console.log(allPosts);
      })
      .catch((err) => console.log(err));
  }

  function downVote(postId) {
    userAxios
      .put(`/api/polipost/${postId}/downvote`)
      .then((res) => {
        setAllPosts((prevPosts) =>
          prevPosts.map((post) => (postId !== post._id ? post : res.data))
        );
        setUserState((prevUserState) => ({
          ...prevUserState,
          posts: prevUserState.posts.map((post) =>
            postId !== post._id ? post : res.data
          ),
        }));
        console.log(allPosts);
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addPost,
        resetAuthError,
        userAxios,
        getUserPosts,
        upVote,
        downVote,
        allPosts,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
