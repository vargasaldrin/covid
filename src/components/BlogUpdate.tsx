import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

interface LocationState {
  oldTitle: string;
  oldContent: string;
  keyName: string;
}

export default function BlogUpdate() {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { keyName, oldContent, oldTitle } = location.state;
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);

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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
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
        <textarea
          name="paragraph_text"
          value={content}
          cols={50}
          rows={10}
          onChange={handleContent}
        ></textarea>
      </label>

      <input type="submit" value="Edit Blog" />
    </form>
  );
}
