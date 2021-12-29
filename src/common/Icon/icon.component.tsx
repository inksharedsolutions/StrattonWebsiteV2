import * as React from 'react';
import { StyledIcon } from 'styled-icons/types';

interface Props {
    icon: StyledIcon;
    color: string;
    size: string;
}
const Icon:React.FC<Props> = ({
    icon,
    color,
    size,
}) => {
    return(
        <Icon color={color} size = {size} icon={icon} />
    )
}

export default Icon;