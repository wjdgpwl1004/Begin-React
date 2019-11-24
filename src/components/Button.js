import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//large, medium, small
//className={`Button ${size}`}로도 표현 가능
function Button({children,  size}) {
    return (
    <button className={classNames('Button',  size)}>{children}</button>
    );
}

Button.defaultProps = {
    size: 'medium'
};

export default Button; 