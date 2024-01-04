import React, { useContext } from "react";
import { format } from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { useBoard } from "../context/BoardContext";
// import BoardContext from "../context/BoardContext";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "300px",
};

const NewPost = () => {
  const navigate = useNavigate();
  // const { post, setPost, setPosts } = useContext(BoardContext);
  const { post, setPost, setPosts } = useBoard();

  const submitHandle = (event) => {
    event.preventDefault();
    setPost((prev) => ({
      ...prev,
      id: prev.id + 1,
      datetime: format(new Date(), "yyyy-MM-dd"),
    }));

    setPosts((prev) => [post, ...prev]);
    setPost((prev) => ({ ...prev, title: "", body: "", category: "" }));
    navigate("/subnav/board");
  };

  return (
    <div>
      <form style={style} onSubmit={submitHandle}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          onChange={(e) =>
            setPost((prev) => ({ ...prev, title: e.target.value }))
          }
          //   post.title = e.target.value
          value={post.title}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="body"
          value={post.body}
          onChange={(e) =>
            setPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <button>등록</button>
      </form>
    </div>
  );
};

export default NewPost;
