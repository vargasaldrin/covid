import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";

export default function BlogDisplay() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [blogList, setBlogList] = useState<any[]>([]);

  useEffect(() => {
    const getList = localStorage.getItem("blogList");

    if (getList) {
      const newList = JSON.parse(getList);
      setBlogList(newList);
    }
  }, []);

  useEffect(() => {
    const newBlogs = blogList.map((key) => {
      const stringData = localStorage.getItem(key);
      const objectData = stringData && JSON.parse(stringData);
      objectData.name = key;
      return objectData;
    });
    setBlogs(newBlogs);
  }, [blogList]);

  const displayBlogs = blogs.map((item, index) => {
    return (
      <Card
        content={item.content}
        index={index}
        key={index}
        name={item.name}
        title={item.title}
        setBlogList={setBlogList}
      />
    );
  });

  return (
    <div>
      {displayBlogs}
      <Link to="/blog/create-blog">
        <button>Create new blog post</button>
      </Link>
    </div>
  );
}
