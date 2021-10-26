
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users,setUsers] = useState("");

  useEffect(()=>{
async function getData(){
  let data = await fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  setUsers([...data]);
}
getData();
  },[])
  return (
    <div className="App">
      {console.log(users)}
      {users ? users.map((item,index)=>{
        return <div key={index} className="user">
          <img className="avatar" src="https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy" alt="avatar" />
          <hr/>
      <p>Id: {  item.id}</p>
      <p>Name: {  item.name}</p>
      <p>UserName:{  item.username}</p>
      <p>Website:{  item.website}</p>
      <p>Phone:{  item.phone}</p>
      <p>Email:{  item.email}</p>
      {console.log(item.address)}
      <div>Address:<p>City:{item.address["city"]}</p>
      <div>geo:<p>lat:{item.address["geo"]["lat"]}</p>
      <p>lng:{item.address["geo"]["lng"]}</p>
      </div>
      <p>Street:{item.address["street"]}</p>
      <p>Suite:{item.address["suite"]}</p>
      <p>Zipcode:{item.address["zipcode"]}</p>
      </div>
          </div>
      }):null}
      
    </div>
  );
}

export default App;
