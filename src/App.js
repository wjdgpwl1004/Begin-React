import React, {useRef} from 'react';
import UserList from './UserList';

//주석
function App() {
  const users = [
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
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

 return (
    <UserList users={users} />
  );
}

export default App;
