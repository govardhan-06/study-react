import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        console.log(data);
        const foundUser = data.find((u) => u.username.toLowerCase() === username.toLowerCase());

        if (foundUser) {
          setUser(foundUser);
        } else {
          console.log("User not found");
        }
      } catch (err) {
        console.log("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{user.name} ({user.username})</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}

export default UserProfile;
