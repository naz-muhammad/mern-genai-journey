import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  console.log('Mai Waisa Hi Run Ho Raha Ho');
  

  useEffect(()=>{
    async function getUsers() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsers(data);
  }

  getUsers();
  },[])

  return (
    <>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </>
  );
}

export default App;