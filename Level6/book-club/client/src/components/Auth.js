import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import { UserContext } from "../context/UserProvider";
import { login } from "../utilities/authentication/login";
import { useNavigate } from "react-router-dom";

const initInputs = { username: "", password: "" };

const Auth = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);

  const { signup, errMsg, resetAuthError, setUserState } =
    useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    signup(inputs);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const { token, user, error } = await login(inputs);
    if (!error) {
      setUserState((prev) => ({ ...prev, user, token }));
      navigate("/profile");
    }
  }

  function toggleForm() {
    setToggle((prev) => !prev);
    resetAuthError();
  }
  return (
    <div className="auth-container">
      <h3>Signup or login to post discussions.</h3>
      {!toggle ? (
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
          />
          <p onClick={toggleForm}>Already a member?</p>
        </>
      ) : (
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p onClick={toggleForm}>Not a member?</p>
        </>
      )}
    </div>
  );
};

export default Auth;
