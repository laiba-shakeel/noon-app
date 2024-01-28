import React, { useState } from 'react'
import { Stack, Paper, Typography, Button } from '@mui/material'
import Input_Component from '../../../components/InputField'
import { credentials_data } from '../../../Utils/CredentialsData'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()
    // console.log(credentials_data)

    // useState is hook use for every time their is need to change the state 

    const onChnageHandle = (e) => {
        // console.log(userData, "userDta")
        const { value, id } = e.target;
        setUserData({ ...userData, [id]: value });
        // square method 
    }
    const submitHandle = (e) => {
        e.preventDefault();
        const { username, password } = userData;
        if (
            username === credentials_data.username &&
            password === credentials_data.password
        ) {
            // alert("correct credentials");
            localStorage.setItem("isLoggedIn", true);
            navigate("/");
        } else {
            alert("Invalid credentials!");
        }

        // credentials_data
    };
    return (
        <Stack className='min-h-[100dvh] justify-center items-center'>
            <div className='max-w-md'>
                <Typography align="center" fontWeight="bold" variant="h5">
                    Login
                </Typography>
                <Paper
                    component="form"
                    onSubmit={submitHandle}
                    sx={{ px: 2, py: 3 }}
                    elevation={10}
                >
                    <Input_Component
                        placeholder="Enter User Name"
                        type="text"
                        required={true}
                        onChange={onChnageHandle}
                        id='username'
                    />
                    <Input_Component
                        placeholder="Enter User Password"
                        type="password"
                        required={true}
                        onChange={onChnageHandle}
                        id='password'
                    />

                    <Button
                        sx={{ width: "100%", mt: 2 }}
                        type='submit'
                        variant='contained'
                        color='success'>
                        Submit
                    </Button>
                </Paper>
            </div>
        </Stack>

    )
}
export default Login
