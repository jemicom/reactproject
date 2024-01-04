import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  id: 1,
  username: "",
  useremail: "",
  userpwd: "",
};

// INITIAL_STATE.id
// INITIAL_STATE['id'] // 속성이 바뀔때

// const user = {};
// user.name = "홍";
// user["email"] = "이메일";
// alert(JSON.stringify(user));

const Register = () => {
  const [user, setUser] = useState(INITIAL_STATE);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.name);
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const postRegister = () => {
    /*
    // react=client : localhost:3000
    fetch("http://localhost:3500/register", {
      method: "POST",
      headers: { "Content-type": "application/json;charset=utf-8" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => console.log(res.message));
    */

    axios.post("http://localhost:3500/register", user).then((res) => {
      console.log(res.data.message);
      navigate("/login");
    });
  };

  const postHandle = () => {
    setUser((prev) => ({ ...prev, id: prev.id + 1 }));
    setUsers((prev) => [...prev, user]);
    // alert(JSON.stringify(user, null, "  "));
    // backend에 넘기기
    postRegister();
  };

  const delHandle = () => {
    // fetch("http://localhost:3500/register", {
    //   method: "DELETE",
    //   headers: { "Content-type": "application/json;charset=utf-8" },
    //   body: JSON.stringify({ id: user.id }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res.message));

    const id = { id: user.id };
    axios
      .delete("http://localhost:3500/register", { data: id })
      .then((res) => console.log(res.data.message));
  };

  const putHandle = () => {
    // fetch("http://localhost:3500/register", {
    //   method: "PUT",
    //   headers: { "Content-type": "application/json;charset=utf-8" },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res.message));

    axios
      .put("http://localhost:3500/register", user)
      .then((res) => console.log(res.data.message));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        name="id"
        placeholder="삭제할 id번호"
        onChange={handleChange}
      />

      <input
        autoFocus
        type="text"
        name="username"
        placeholder="이름"
        onChange={handleChange}
      />
      <input
        type="email"
        name="useremail"
        placeholder="이메일"
        onChange={handleChange}
      />
      <input
        type="password"
        name="userpwd"
        placeholder="비밀번호"
        onChange={handleChange}
      />
      <button onClick={postHandle}>회원가입</button>
      <button onClick={delHandle}>회원탈퇴</button>
      <button onClick={putHandle}>비밀번호수정</button>
    </form>
  );
};

export default Register;
