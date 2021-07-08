import { user } from "../data/user";

export default function Profile() {
  return (
    <div>
      <img src={user.image} alt="profile" />
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Contact Number: {user.contact}</div>
      <div>Occupation: {user.occupation}</div>
    </div>
  );
}
