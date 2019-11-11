import React, {Component} from 'react';

class Hello extends Component {
  static defaultProps = {
    name: '이름없음',
  };
  render(){
    const { color, isSpecial, name} = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    )
  }
}

//리엑트를 사용하려면 React를 임포트 해주어야 한다.
//컴포넌트는 대문자로 시작한다.
//jsx를 리턴한다.
//html처럼 생겼지만 html은 아니다.
// function Hello({ color, name , isSpecial }){
//   // console.log(props);
//   console.log(isSpecial);
//   return (
//     //JSX에서 null, undefined, false를 리턴하면 아무것도 나타나지 않는다.
//     //단, 0은 화면에 출력된다.
//     //단순히 숨기고 보이고는 단순계산법 이용, 삼항연산자는 내용이 바뀌는 경우 주로 이용
//     <div style={{ color }}>
//       {/* { isSpecial ? <b>*</b> : null } */}
//       { isSpecial && <b>*</b> }
//       <b>{isSpecial ? '나는 천재다' : '천재가 아니다.'}</b>
//       안녕하세요 {name}
//     </div>
//   );
// };

// Hello.defaultProps = {
//   name: '이름없음'
// };


export default Hello;

