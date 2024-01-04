import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBoard } from "../context/BoardContext";
// import BoardContext from "../context/BoardContext";

const BoardDetail = () => {
  // const { posts } = useContext(BoardContext);
  const { posts } = useBoard();

  const { id } = useParams();
  const navigate = useNavigate();

  const findData = posts.find((post) => post.id === id * 1);

  const gotoBack = () => {
    // navigate("/subnav/board"); // 절대주소
    navigate(".."); // 상대주소
  };

  return (
    <div>
      <h3>BoardDetail {id}</h3>
      <div> {findData.id} </div>
      <div> {findData.title} </div>
      <div> {findData.body} </div>
      <div> {findData.datetime} </div>
      <button onClick={gotoBack}>목록보기</button>
    </div>
  );
};

export default BoardDetail;
