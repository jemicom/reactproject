import React, { createContext, useContext, useEffect, useState } from "react";
import { format } from "date-fns";

const datas = [
  {
    id: 1,
    category: "프랜차이즈",
    title: "매장의 적정평수는 어떻게 되나요?",
    body: `상권에 따라 다양한 형태로 오픈이 가능하며 입지, 상권에 따라 개별적으로 적절여부를 판단합니다.
          (단 , 영화관, 백화점, 병원등의 특수 상권의 경우 매장 형태 및 상권에 따라 3~4평 부족해도 가능할 수 있습니다. `,
    datetime: "2023-04-12",
  },
  {
    id: 2,
    category: "서비스",
    title: "매장의 인테리어 공사는 본사를 통해서만 해야 되나요?",
    body: `우리 회사는 인테리어 공사를 직접 시행하지는 않지만, 파스쿠찌의 브랜드 컨셉을 유지하기 위하여 인테리어 시공경험이 있는 업체 풀을 보유하고 있습니다. 입찰을 통해 공사업체를 정할 수 있지만, 가맹희망자가 직접 업체를 지정하여 시공을 의뢰하실 수도 있습니다. 자세한 진행은 담당자와 상담을 통하여 안내받으시기 바랍니다. `,
    datetime: "2023-04-13",
  },
  {
    id: 3,
    category: "서비스",
    title: "회원정보는 어디서 변경하나요?",
    body: `회원정보수정은 SPC통합회원정보관리 페이지에서 해주시기 바랍니다.
              http://members.happypointcard.com/member_02/join_05.html`,
    datetime: "2023-04-13",
  },
];
const INITIAL_POST = {
  id: 4,
  category: "",
  title: "",
  body: "",
  datetime: format(new Date(), "yyyy-MM-dd"),
};

const BoardContext = createContext({});

export const BoardProvider = ({ children }) => {
  const [posts, setPosts] = useState(datas);
  const [post, setPost] = useState(INITIAL_POST);
  const [search, setSearch] = useState("");
  const [searchPosts, setSearchPosts] = useState(posts);

  const searchHandle = () => {
    // const filter = posts.filter(
    //   (post) => post.title.includes(search) || post.body.includes(search)
    // );

    const filter = posts.filter(
      (post) =>
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.body.toLocaleLowerCase().includes(search.toLowerCase())
    );

    console.log(filter);
    setSearchPosts(filter);
  };

  useEffect(() => {
    searchHandle();
  }, [search]);

  useEffect(() => {
    setSearchPosts(posts);
  }, [posts]);

  return (
    <BoardContext.Provider
      value={{
        post,
        setPost,
        posts,
        setPosts,
        search,
        setSearch,
        searchPosts,
        setSearchPosts,
        searchHandle,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;

// 사용자 정의 hook
export const useBoard = () => {
  return useContext(BoardContext);
};
