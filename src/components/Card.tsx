import React from "react";
import { Link } from "react-router-dom";

interface cardProps {
  content: string;
  index: number;
  key: number;
  name: string;
  setBlogList: React.Dispatch<React.SetStateAction<any[]>>;
  title: string;
}

export default function Card(props: cardProps) {
  const handleDelete = () => {
    const stringList = localStorage.getItem("blogList");
    const newList = stringList && JSON.parse(stringList);
    const index = newList && newList.indexOf(props.name);
    newList.splice(index, 1);
    console.log(newList);
    props.setBlogList(newList);

    localStorage.setItem("blogList", JSON.stringify(newList));
    localStorage.removeItem(props.name);
  };

  return (
    <div key={props.index}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
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
        <button>Update Blog</button>
      </Link>
      <button onClick={handleDelete}>Delete Blog</button>
    </div>
  );
}
