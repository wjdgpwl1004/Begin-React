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
        </div>
    );
}

export default Scss; 