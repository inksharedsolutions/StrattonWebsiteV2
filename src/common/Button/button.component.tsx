import * as React from 'react';
import { StyledIcon } from 'styled-icons/types';

interface buttonProps{
    border: string;
    color: string;
    children?: React.ReactNode;
    buttonname?: string;
    height: string;
    onClick: () => void;
    radius: string;
    width: string;
    cursor?: string;
}


const Button: React.FC<buttonProps> = ({
    border,
    color,
    children,
    height,
    onClick,
    radius,
    width,
    cursor,
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width,
                cursor: cursor,
            }}
        >
            {children}
        </button>
    )
}

export default Button;