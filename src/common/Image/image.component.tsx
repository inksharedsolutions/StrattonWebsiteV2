import * as React from 'react';

interface Props {
    src: string;
    className?: string;
    alt: string;
    width?: string;
    height?: string;
}

const Image:React.FC<Props> = ({
    src,
    alt,
}) => {
    return(
        <img
            alt={alt}
            src={src}
        />
    )
}

export default Image;