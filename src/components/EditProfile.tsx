import React, { useContext, useState } from "react";
import { useHistory } from "react-router";

import { Container, Submit } from "./styles/EditProfile.style";
import { ThemeContext } from "../context/Context";

// interface EditProfileProps {
//   data: {
//     contact: string;
//     email: string;
//     handleChange: React.ChangeEventHandler<HTMLInputElement>;
//     name: string;
//     occupation: string;
//     setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
//   };
// }

export default function EditProfile() {
  const getData = localStorage.getItem("profileData");
  const profileData = getData && JSON.parse(getData);
  const { toggleTheme } = useContext(ThemeContext);
  const history = useHistory();

  const [contact, setContact] = useState(profileData.contact);
  const [email, setEmail] = useState(profileData.email);
  const [name, setName] = useState(profileData.name);
  const [occupation, setOccupation] = useState(profileData.occupation);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    if (id === "contact") {
      setContact(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "name") {
      setName(value);
    } else if (id === "occupation") {
      setOccupation(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {
      contact,
      email,
      name,
      occupation,
    };

    localStorage.setItem("profileData", JSON.stringify(newData));
    history.push("/profile");
  };

  return (
    <Container onSubmit={handleSubmit} toggleTheme={toggleTheme}>
      <label>
        Name:{" "}
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email Address:{" "}
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact Number:{" "}
        <input
          type="tel"
          id="contact"
          pattern="[0-9]{11}"
          value={contact}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Occupation:{" "}
        <input
          type="text"
          id="occupation"
          value={occupation}
          onChange={handleChange}
          required
        />
      </label>

      <Submit type="submit" value="Save Changes" toggleTheme={toggleTheme} />
    </Container>
  );
}
