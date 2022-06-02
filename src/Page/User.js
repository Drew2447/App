import axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {
  let [users, setUsers] = useState([]);
  

  useEffect(() => {
    getUsers();
  }, []);

  const renderUsers = () => {
    
    return users.map((u) => {
      return (
        <div key={u.id}>
          <h1>{u.id}</h1>
          <h1>{u.first_name} {u.last_name}</h1>
          <h1>{u.email}</h1>
          <h1>{u.avatar}</h1>
          
        </div>
      );
    });
  };

  const getUsers = async () => {
    let res = await axios.get("https://reqres.in/api/users?");
    console.log(res)
    setUsers(res.data.data);
  };
  return(
    <div title="users">
      <h1>Users</h1>
      {renderUsers()}
    </div>
  )
 
};

export default Users;