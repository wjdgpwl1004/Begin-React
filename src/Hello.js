import React from 'react';
//리엑트를 사용하려면 React를 임포트 해주어야 한다.
//컴포넌트는 대문자로 시작한다.
//jsx를 리턴한다.
//html처럼 생겼지만 html은 아니다.
function Hello({ color, name }){
  // console.log(props);
  return <div style={{
    color
  }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
  name: '이름없음'
};
export default Hello;

