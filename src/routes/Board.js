import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useBoard } from "../context/BoardContext";
// import BoardContext from "../context/BoardContext";

const style = {
  display: "flex",
  lineHeight: "10px",
  gap: "0",
};

// <Route path="board" element={<Board posts={searchPosts} />} />
const Board = () => {
  // const { posts, searchPosts, search } = useContext(BoardContext);
  const { posts, searchPosts, search } = useBoard();
  // 잠깐 미뤄두기
  const returnPosts = searchPosts.map((post) => (
    <div key={post.title} className="boardTable">
      <p>{post.id}</p>
      <p>
        <Link to={`/subNav/board/${post.id}`}> {post.title} </Link>
        {/* 
          localhost:3000/board/1
          절대주소
        */}
      </p>
    </div>
  ));

  return <div>{returnPosts}</div>;
};

export default Board;
