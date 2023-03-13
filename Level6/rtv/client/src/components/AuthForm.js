import React from "react";

const AuthForm = (props) => {
  const {
    handleChange,
    handleSubmit,
    btnText,
    inputs: { username, password },
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="@username"
      />
      <input
        type="text"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <button>{btnText}</button>
    </form>
  );
};

export default AuthForm;
