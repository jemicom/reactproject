import React, { useState } from "react";
import tabs from "./Tabs.module.css";

/*
const Tabs = () => {
  const tab_titles = ["btn01", "btn02", "btn03"];
  const tab_contents = [
    "한글은 아름다운 글입니다.",
    "React를 사용하는데 관심이 있다면, 온라인 코드 편집기를 사용할 수 있습니다. CodePen, CodeSandbox 또는 Stackblitz에서 Hello World 템플릿을 사용해 보세요.",
    "1분 안에 HTML 페이지에 React를 추가할 수 있습니다. 그리고 조금씩 React의 비중을 늘리거나 몇 개의 동적 위젯에 포함할 수 있습니다.",
  ];

  const [btn, setBtn] = useState(0); // 0, 1, 2
  const clickHandle = (index) => {
    setBtn(index);
    console.log("clicked title", btn);
  };

  return (
    <div className={tabs.Tabs}>
      <ul className={tabs.TabBtns}>
        {tab_titles.map((title, index) => (
          <li key={title} onClick={() => clickHandle(index)}>
            {title}
          </li>
        ))}
      </ul>

      {tab_contents.length &&
        tab_contents.map((content, index) => (
          <div key={index} className={btn === index ? tabs.Show : tabs.Content}>
            {content}
          </div>
        ))}
    </div>
  );
};
*/
const tabsDatas = [
  {
    id: 1,
    title: "btn1",
    content: "한글은 아름다운 글입니다.",
  },
  {
    id: 2,
    title: "btn2",
    content:
      "React를 사용하는데 관심이 있다면, 온라인 코드 편집기를 사용할 수 있습니다. CodePen, CodeSandbox 또는 Stackblitz에서 Hello World 템플릿을 사용해 보세요.",
  },
  {
    id: 3,
    title: "btn3",
    content:
      "1분 안에 HTML 페이지에 React를 추가할 수 있습니다. 그리고 조금씩 React의 비중을 늘리거나 몇 개의 동적 위젯에 포함할 수 있습니다.",
  },
  {
    id: 4,
    title: "btn1",
    content: "한글은 아름다운 글입니다.",
  },
  {
    id: 5,
    title: "btn2",
    content:
      "React를 사용하는데 관심이 있다면, 온라인 코드 편집기를 사용할 수 있습니다. CodePen, CodeSandbox 또는 Stackblitz에서 Hello World 템플릿을 사용해 보세요.",
  },
  {
    id: 6,
    title: "btn3",
    content:
      "1분 안에 HTML 페이지에 React를 추가할 수 있습니다. 그리고 조금씩 React의 비중을 늘리거나 몇 개의 동적 위젯에 포함할 수 있습니다.",
  },
];

const Tabs = () => {
  //  const { tabsDatas } = props;

  const [btn, setBtn] = useState(tabsDatas[0].id); // 1, 2, 3
  const clickHandle = (index) => {
    setBtn(index);
    console.log("clicked title", btn);
  };
  return (
    <div className={tabs.Tabs}>
      <ul className={tabs.TabBtns}>
        {tabsDatas.length &&
          tabsDatas.map((item) => (
            <li key={`${item.id}`} onClick={() => clickHandle(item.id)}>
              {item.title}
            </li>
          ))}
      </ul>
      {tabsDatas.length &&
        tabsDatas.map((item) => (
          <div
            key={item.id}
            className={btn === item.id ? tabs.Show : tabs.Content}
          >
            {item.content}
          </div>
        ))}
    </div>
  );
};
export default Tabs;
