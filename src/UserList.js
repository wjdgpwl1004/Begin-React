import React from 'react';

function User({user}){
  return (
    <div>
    <b>{user.username}</b> <span>({user.email})</span>
  </div>
  );
};

function UserList(){
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
  return (
    <div>
      {
        users.map(
          user => (<User user={user} key={user} />)
        )
      }
    </div>
  );

};

export default UserList;