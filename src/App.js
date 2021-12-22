import React, {useState} from 'react'; 
import AddUser from './component/Users/AddUserName';
import UsersList from './component/Users/UsersList';

function App() {
  const [usersList,setUsersList]=useState([]); 

  const addUserHandler= (uName,uAge)=> { 
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name:uName , age:uAge ,id:Math.random().toString()}]  
      // creates an unique id because each child needs an unique key 
      //  use the spread operator to obtain the previousList 
    }); // gets the old list and append the new users 
  };
  // creates state usersList 
  return (
    <>
<AddUser onAddUser={addUserHandler}/> 
<UsersList users={usersList} />
{/* you need to pass down users props array because in userList component they are asking for users.props */}
    </>
  );
}

export default App;
