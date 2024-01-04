import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navbars = [
  { id: 1, route: "/", name: "home" },
  { id: 2, route: "/coins", name: "코인" },
  { id: 3, route: "/board", name: "게시판" },
  { id: 4, route: "/newPost", name: "글쓰기" },
  { id: 5, route: "/login", name: "로그인" },
  { id: 6, route: "/register", name: "회원가입" },
  { id: 7, route: "/about", name: "about" },
];

const NavBar = () => {
  const [isActive, setIsActive] = useState(0);
  // 0번 메뉴 저장, 선택
  const activeStyle = {
    color: "red",
  };
  return (
    <nav className="lnb">
      <ul>
        {navbars.map((menu, index) => (
          <li>
            <Link
              to={menu.route}
              onClick={() => setIsActive(index)}
              style={isActive === index ? activeStyle : null}
            >
              {menu.name}
            </Link>
          </li>
        ))}

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
