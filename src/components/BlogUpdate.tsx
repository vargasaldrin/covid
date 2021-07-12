import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";

import { Container } from "./styles/BlogUpdate.style";
import { ThemeContext } from "../context/Context";

interface LocationState {
  oldTitle: string;
  oldContent: string;
  keyName: string;
}

export default function BlogUpdate() {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { keyName, oldContent, oldTitle } = location.state;
  const [content, setContent] = useState(oldContent);
  const [title, setTitle] = useState(oldTitle);
  const { toggleTheme } = useContext(ThemeContext);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      content,
    };

    localStorage.setItem(keyName, JSON.stringify(data));
    history.push("/blog");
  };

  return (
    <Container toggleTheme={toggleTheme} onSubmit={handleSubmit}>
      <h1>Update Blog</h1>
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

      <input type="submit" value="Edit Blog" />
    </Container>
  );
}
