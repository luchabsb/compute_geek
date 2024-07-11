import React from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

const Profile = (props) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // const user = {
        //   email: data.get('email'),
        //   password: data.get('password'),
        //   firstName: data.get('firstName'),
        //   lastName: data.get('lastName'),
        //   username: data.get('username'),
        //   roleId: 1,
        //   state: 1
        // }
        // dispatch(signUp(user))
    };

    return (
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="" >
        <CssBaseline />
        <Grid container spacing={3} style={{ border: '1px solid red'}}>
            <Grid item xs={4} style={{ border: '1px solid blue'}}>
            </Grid>
            <Grid item xs={8}style={{ border: '1px solid black'}}>
            </Grid>
            
        </Grid>
       
        
      </Container>
    </ThemeProvider>
    );
}

export default Profile;
