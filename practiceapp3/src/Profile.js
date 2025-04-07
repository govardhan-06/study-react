import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return <h2>Welcome, {username}!</h2>;
};

export default Profile;
