import React from 'react';
import Button from './components/Button';
import './App.scss';

function Scss() {
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
        </div>
    );
}

export default Scss; 