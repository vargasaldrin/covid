import React, { useContext, useState } from "react";
import { useHistory } from "react-router";

import { Container } from "./styles/BlogCreate.style";
import { ThemeContext } from "../context/Context";

export default function BlogCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toggleTheme } = useContext(ThemeContext);
  const history = useHistory();

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const stringList = localStorage.getItem("blogList");
    const data = {
      title,
      content,
    };
    let keyName;

    if (stringList) {
      const oldBlogList = JSON.parse(stringList);
      const blogNumber = Math.floor(Math.random() * 1000000);
      keyName = `blog-${blogNumber}`;
      const newList = [...oldBlogList, keyName];
      localStorage.setItem("blogList", JSON.stringify(newList));
    } else {
      keyName = "blog-0";
      const newList = [keyName];
      localStorage.setItem("blogList", JSON.stringify(newList));
    }

    localStorage.setItem(keyName, JSON.stringify(data));
    history.push("/blog");
  };

  return (
    <Container toggleTheme={toggleTheme} onSubmit={handleSubmit}>
      <h2>Create New Blog</h2>

      <label>
        Title:
        <br />
        <input
          type="text"
          name="name"
          maxLength={24}
          value={title}
          onChange={handleTitle}
          required
        />
      </label>

      <label>
        Content:
        <br />
        <textarea
          name="paragraph_text"
          value={content}
          cols={50}
          rows={10}
          onChange={handleContent}
        ></textarea>
      </label>

      <input type="submit" value="Publish Blog" />
    </Container>
  );
}
