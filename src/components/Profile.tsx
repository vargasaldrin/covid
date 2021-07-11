import { useContext } from "react";
import { Link } from "react-router-dom";

import { initialProfile } from "../utilities/constants";
import { ThemeContext } from "../context/Context";
import { Button, Container, Image, Text } from "./styles/Profile.style";

export default function Profile() {
  const { toggleTheme } = useContext(ThemeContext);
  const getData = localStorage.getItem("profileData");
  let profileData;

  if (getData) {
    const newProfile = JSON.parse(getData);
    profileData = newProfile;
  } else {
    localStorage.setItem("profileData", JSON.stringify(initialProfile));
    profileData = initialProfile;
  }

  return (
    <Container>
      <Image src="./profilepic.jpeg" alt="profile" />
      <Text toggleTheme={toggleTheme}>
        Name: <span>{profileData.name}</span>
      </Text>

      <Text toggleTheme={toggleTheme}>
        Email: <span>{profileData.email}</span>
      </Text>
      <Text toggleTheme={toggleTheme}>
        Contact Number: <span>{profileData.contact}</span>
      </Text>
      <Text toggleTheme={toggleTheme}>
        Occupation: <span>{profileData.occupation}</span>
      </Text>
      <Link to="/profile/edit">
        <Button toggleTheme={toggleTheme}>Edit Profile</Button>
      </Link>
    </Container>
  );
}
