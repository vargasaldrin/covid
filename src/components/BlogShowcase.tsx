import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import { Button, CardWrapper, Container } from "./styles/BlogShowcase.style";
import { ThemeContext } from "../context/Context";

export default function BlogShowcase() {
  const { toggleTheme } = useContext(ThemeContext);
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
    <Container>
      <CardWrapper>{displayBlogs}</CardWrapper>
      <Link to="/blog/create-blog">
        <Button toggleTheme={toggleTheme}>Create new blog post</Button>
      </Link>
    </Container>
  );
}
