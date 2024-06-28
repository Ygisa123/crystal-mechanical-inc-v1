import React, { Children } from 'react';
import { Link } from "react-router-dom";
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to='/contact' className='btn-mobile'>
            <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} 
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};