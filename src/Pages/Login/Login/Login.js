import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container style={{ marginTop: 90, marginBottom: 90, width: '50%' }}>
            <Typography variant="h4" gutterBottom>Login
            </Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />

                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />

                <Button sx={{ width: '75%', m: 3 }}
                    type="submit"
                    variant="contained">Login</Button>

                <NavLink style={{ textDecoration: "None" }} to="/Register">

                    <Button sx={{ width: '75%', m: 1 }}
                        type="submit"
                        variant="text">New User ? Please Registration</Button>
                </NavLink>

            </form>}
            <br />
            <br />
            {/* {!isLoading && <Button onClick={handleGoogleSignIn} sx={{ m: 1 }}
                type="submit"
                variant="contained">Google SignIn</Button>} <br /><br /> */}
            {
                isLoading && <CircularProgress color="secondary" />

            }
            {user?.email && <Alert severity="success">User login successfully!</Alert>}
            {
                authError && <Alert severity="error">{authError}</Alert>
            }




        </Container >
    );
};

export default Login;