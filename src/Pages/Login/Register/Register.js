import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
// import './Register.css';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert("password doesn't match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)


        e.preventDefault();
    }

    return (
        <Container style={{ marginTop: 40, marginBottom: 50, width: '50%' }}>

            <Typography variant="h4" gutterBottom>Register
            </Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onChange={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onChange={handleOnBlur}
                    variant="standard" />

                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Retype Your Password"
                    type="password"
                    name="password2"
                    onChange={handleOnBlur}
                    variant="standard" />

                <Button sx={{ width: '75%', m: 3 }}
                    type="submit"
                    variant="contained">Registration</Button>

                <NavLink style={{ textDecoration: "None" }} to="/Login">

                    <Button sx={{ width: '75%', m: 1 }}
                        type="submit"
                        variant="text">Already Registered ? Please Login</Button>
                </NavLink>

            </form>}
            {
                isLoading && <CircularProgress color="secondary" />

            }
            {user?.email && <Alert severity="success">User created successfully!</Alert>}
            {
                authError && <Alert severity="error">{authError}</Alert>
            }

        </Container >
    );
};

export default Register;