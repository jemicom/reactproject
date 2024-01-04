import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
// import { Header } from "./components/index.js";
// index.js는 생략 가능
import { Header, Footer, SubNav } from "./components";
import {
  Home,
  Coins,
  CoinDetail,
  Board,
  NewPost,
  Login,
  Register,
  About,
  BoardDetail,
  Movies,
  NotFound,
} from "./routes";
import "./App.css";

import { BoardContext, BoardProvider } from "./context/BoardContext";
import { useAuth, AuthProvider } from "./context/auth";

// protected route
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  // const navigate = useNavigate();
  const location = useLocation();
  // js : loction

  if (!auth.user) {
    // navigate("/login");
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <BoardProvider>
        <BrowserRouter>
          <Header brand="koreaIt" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="coins"
              element={
                // <RequireAuth>
                <Coins />
                // </RequireAuth>
              }
            />
            <Route path="coins/:coinId" element={<CoinDetail />} />

            {/* localhost:3000/subNav
            localhost:3000/subNav/board 
            localhost:3000/subNav => 라우트 바꿔서 수정해 보기
            localhost:3000/subNav/board/1
            localhost:3000/subNav/newPost
        */}

            <Route path="movies" element={<Movies />} />

            <Route path="subnav" element={<SubNav />}>
              <Route index element={<Board />} />
              <Route path="board" element={<Board />} />
              {/* 고쳐야 되는 부분, 각종 연결된 링크 모두 수정 해야 함 */}
              <Route path="board/:id" element={<BoardDetail />} />
              <Route path="newPost" element={<NewPost />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BoardProvider>
    </AuthProvider>
  );
};

export default App;
