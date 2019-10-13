import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

//주석
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username : 'velopert',
      email : 'public@naver.com'
    },
    {
      id: 2,
      username : 'vel',
      email : 'pub@naver.com'
    },
    {
      id: 3,
      username : 'ss',
      email : 'ssc@naver.com'
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

 return (
   <>
    <CreateUser 
    username={username} 
    email={email} 
    onChange={onChange}
    onCreate={onCreate}
    />
    <UserList users={users} />
    </>
  );
}

export default App;
