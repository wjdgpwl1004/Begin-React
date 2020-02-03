import React from 'react';
import axios from 'axios';
import {useAsync} from 'react-async';

async function getUser({ id }) {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

function User({ id }) {
    const {
        data: user,
        error,
        isLoading
    } = useAsync({
        //만약 skip true 와 같은 기능을 하고싶다면 run을 불러온다.
        //defferFn으로 getUser를 넣어준다.
        promiseFn: getUser,
        id,
        watch: id,
        // reload - refetch와 동일한 기능을 하는 함수
    });

    if(isLoading) return <div>로딩중..</div>
    if(error) return <div>에러 발생</div>
    if(!user) return null;
    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email: </b> {user.email}
            </p>
        </div>
    );
}

export default User; 