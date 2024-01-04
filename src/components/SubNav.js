import React, { useContext } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useBoard } from "../context/BoardContext";
// import BoardContext from "../context/BoardContext";

// const active = {
//   backgroundColor: "antiquewhite",
//   color: "red",
// };
const SubNav = () => {
  //   const { search, setSearch } = useContext(BoardContext);
  const { search, setSearch } = useBoard();

  return (
    <section className="board">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">검색어 입력하세요</label>
        <input
          id="search"
          type="text"
          placeholder="검색어"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
      <ul>
        <li>
          <NavLink
            to="/subnav/board"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            개설정보
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/subnav/newPost"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            문의하기
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};

export default SubNav;
