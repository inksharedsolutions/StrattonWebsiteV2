import * as React from 'react';
import TextFieldComponent from '../../common/TextField/textField.component';
import { makeStyles, createStyles, Button, FormControl } from '@material-ui/core';

const LoginContainer: React.FC = () => {
    return(
        <div>
           <FormControl>
                <TextFieldComponent label="username" name="loginUsername" placeholder="Username" required={false} type="text"/>
                <TextFieldComponent label="password" name="loginPassword" placeholder="Password" required={false} type="password"/>

                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </FormControl>
        </div>
    )
}

export default LoginContainer;