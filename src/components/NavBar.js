import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const navbars = [
  { id: 1, route: "/", name: "home" },
  { id: 2, route: "/movies", name: "영화" },
  { id: 3, route: "/coins", name: "코인" },
  { id: 4, route: "/subNav/board", name: "게시판" },
  { id: 5, route: "/register", name: "회원가입" },
  { id: 6, route: "/about", name: "about" },
  // { id: 5, route: "/login", name: "로그인" },
];

const NavBar = () => {
  const activeStyle = {
    color: "red",
  };

  const auth = useAuth(); // user, login, logout

  return (
    <nav className="lnb">
      <ul>
        {navbars.map((menu) => (
          <li key={menu.name}>
            {/* <NavLink to={menu.route}>{menu.name}</NavLink> active 클래스 자동 인식*/}
            <NavLink
              to={menu.route}
              className={({ isActive }) => {
                return isActive ? "select" : "";
              }}
              // style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
        <li>
          {auth.user ? (
            <div>
              {auth.user} 님<button onClick={auth.logout}>Logout</button>
            </div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>

        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/coins">coins</NavLink>
            상세페이지는 메뉴화 하지 않음  
        </li>
        <li>
          <NavLink to="/board">게시판</NavLink>
        </li>
        <li>
          <NavLink to="/newPost">문의하기</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
           로그인창에서 회원가입을 유도하는 버튼  
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>*/}
      </ul>
    </nav>
  );
};

export default NavBar;
