import React, {useState} from 'react';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import './App.scss';

function Scss() {
    const [check, setCheck] = useState(false);
    const onChange = (e) => {
        setCheck(e.target.checked);
    }
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large">Button</Button>
                <Button>Button</Button>
                <Button size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button color="gray" size="large">Button</Button>
                <Button color="gray">Button</Button>
                <Button color="gray" size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button  color="pink" size="large">Button</Button>
                <Button color="pink">Button</Button>
                <Button  color="pink"size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button color="gray" outline fullWidth>Button</Button>
                <Button color="pink" outline fullWidth className="customizied">Button</Button>
            </div>
            <div>
            <CheckBox onChange={onChange} checked={check}>다음 약관에 모두 동의</CheckBox>
        </div>
        </div>
       
    );
}

export default Scss; 