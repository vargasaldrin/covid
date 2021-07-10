import React from "react";

interface EditProfileProps {
  data: {
    contact: string;
    email: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    name: string;
    occupation: string;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export default function EditProfile(props: EditProfileProps) {
  const { contact, email, handleChange, name, occupation, setIsEditing } =
    props.data;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email Address:
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact Number:
        <input
          type="number"
          id="contact"
          value={contact}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Occupation:
        <input
          type="text"
          id="occupation"
          value={occupation}
          onChange={handleChange}
          required
        />
      </label>

      <input type="submit" value="Save Changes" />
    </form>
  );
}
