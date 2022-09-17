import React, { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({ id: "", password: "" });

  const { id, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onClick = () => {
    setInputs({ id: "", password: "" });
  };

  return (
    <>
      <form>
        <input
          value={id}
          onChange={onChange}
          name="id"
          type="text"
          placeholder="아이디"
        />
        <input
          value={password}
          onChange={onChange}
          name="password"
          type="password"
          placeholder="비밀번호"
        />
      </form>
      <button onClick={onClick}>로그인</button>
    </>
  );
};

export default Login;
