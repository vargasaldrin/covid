import { useState } from "react";
import EditProfile from "./EditProfile";

export default function Profile() {
  const [contact, setContact] = useState("09653273935");
  const [email, setEmail] = useState("vargasero@gmail.com");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Aldrin Vargas");
  const [occupation, setOccupation] = useState("Front End Developer");

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

  const handleClick = () => {
    setIsEditing(true);
  };

  if (!isEditing) {
    return (
      <div>
        <img src="./profilepic.jpg" alt="profile" />
        <div>Name: {name}</div>

        <div>Email: {email}</div>
        <div>Contact Number: {contact}</div>
        <div>Occupation: {occupation}</div>

        <button onClick={handleClick}>Edit Profile</button>
      </div>
    );
  } else {
    return (
      <EditProfile
        data={{ contact, email, handleChange, name, occupation, setIsEditing }}
      />
    );
  }
}
