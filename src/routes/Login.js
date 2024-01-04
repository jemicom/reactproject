import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

const INITIAL_STATE = {
  useremail: "",
  userpwd: "",
};

const Login = () => {
  const [user, setUser] = useState(INITIAL_STATE);
  const useremailRef = useRef();
  const userpwdRef = useRef();
  console.log(useremailRef);
  const location = useLocation();

  const auth = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.name);
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const input = document.querySelector(input[name="userid"])
  // input.focus()
  // input.value = ""
  const handleReset = () => {
    useremailRef.current.focus();
  };
  const handleLogin = () => {
    // alert(JSON.stringify(user, null, "  "));
    axios
      .post("http://localhost:3500/login", user)
      .then((res) => {
        console.log(res.data.message);
        // 전역데이터로 저장해두면 값을 사용할 수 있음

        if (res.data.success) {
          auth.login(res.data.message);
          // 로그인 후 전역데이터로 이름 저장
          // navigate("/coins");
          navigate("..");
          // navigate(-1);
          // 5, 6
          // history객체  history.gotoBack(-5)
        } else {
          new Error("다시 로그인하세요.");
        }
      })
      .catch((err) => navigate("/login"));

    useremailRef.current.value = "";
    userpwdRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={useremailRef}
        type="text"
        name="useremail"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="userpwd"
        ref={userpwdRef}
        placeholder="비밀번호"
        onChange={handleChange}
      />
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleReset}>취소</button>
    </form>
  );
};

export default Login;
