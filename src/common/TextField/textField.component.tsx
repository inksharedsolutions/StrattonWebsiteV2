import * as React from 'react';
// import MuiTextField from '@material-ui/core/TextField';

interface TextFieldInfo{
    name: string;
    label: string;
    value?: any;
    placeholder?: string;
    required: boolean;
    errorMessage?: string;
    autoFocus?: boolean;
    icon?: string;
    type: string;
    defaultValue?: string;
}

const TextField: React.FC<TextFieldInfo> = (props) => {

    return(
        <>
            <input />
        </>
    )
}


export default TextField;