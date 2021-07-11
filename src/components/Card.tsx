import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../context/Context";
import {
  DeleteButton,
  ReadButton,
  UpdateButton,
  Wrapper,
} from "./styles/Card.style";

interface cardProps {
  content: string;
  index: number;
  key: number;
  name: string;
  setBlogList: React.Dispatch<React.SetStateAction<any[]>>;
  title: string;
}

export default function Card(props: cardProps) {
  const { toggleTheme } = useContext(ThemeContext);

  const handleDelete = () => {
    const stringList = localStorage.getItem("blogList");
    const newList = stringList && JSON.parse(stringList);
    const index = newList && newList.indexOf(props.name);
    newList.splice(index, 1);
    props.setBlogList(newList);

    localStorage.setItem("blogList", JSON.stringify(newList));
    localStorage.removeItem(props.name);
  };

  return (
    <Wrapper toggleTheme={toggleTheme}>
      <img src="blog_poster.jpeg" alt="Rick and Morty" />
      <h2>{props.title}</h2>
      {/* <p>{props.content}</p> */}
      <ReadButton>Read Blog</ReadButton>
      <div>
        <Link
          to={{
            pathname: "/blog/update-blog",
            state: {
              oldTitle: props.title,
              oldContent: props.content,
              keyName: props.name,
            },
          }}
        >
          <UpdateButton>Update Blog</UpdateButton>
        </Link>
        <DeleteButton onClick={handleDelete}>Delete Blog</DeleteButton>
      </div>
    </Wrapper>
  );
}
