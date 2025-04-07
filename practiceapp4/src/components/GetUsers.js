import React, { useEffect, useState } from 'react'

const GetUsers = () => {
    const [users,setUser] = useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const fetchUsers=async ()=>{
            setLoading(true);
            try{
                const res=await fetch('https://jsonplaceholder.typicode.com/users');
                const data=await res.json();
                console.log("User data fetched");
                setUser(data);
                console.log(users);
            }catch{
                console.error("Failed to fetch users");
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[]);
  return (
    <div>
      <h1>User List</h1>
      {loading ? (<h3>Loading....</h3>):(
        <div>
        <ul>
        {users.map(user=>(
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {users.map(user => {
        return user.name==="Chelsey Dietrich"?(<h1 key={user.id}>Hey {user.name}</h1>):(<h1 key={user.id}></h1>)
      })}
      </div>
      )
      }
    </div>
  )
}

export default GetUsers
