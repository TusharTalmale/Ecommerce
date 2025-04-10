import * as React from "react";
import {
    Grid,
    TextField,
    Button,
    Paper,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  useEffect, useState } from "react";
import { getUser, login } from "../../../Redux/Auth/Action";


export default function LoginUserForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth} = useSelector((store) => store);
    const jwt=localStorage.getItem("jwt");

    const [openSnackBar,setOpenSnackBar]=useState(false);
    const handleCloseSnakbar=()=>setOpenSnackBar(false);

    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt));
        }
    },[jwt])

    useEffect(()=>{
        if(auth.user || auth.error) setOpenSnackBar(true);
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }
        console.log("login user", userData);
        dispatch(login(userData));

    };


    return (
        <>
             <Paper elevation={4} className="w-full max-w-xl p-20 rounded-2xl">
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    className="font-semibold text-gray-800"
                >
                    Welcome Back
                </Typography>

                <form className="w-full" onSubmit={handleSubmit} >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: "#9155FD",
                                    padding: "0.75rem",
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    ":hover": { backgroundColor: "#7e3ff2" },
                                }}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                <div className="mt-6 text-center">
                    <Typography variant="body2">
                        Don’t have an account?
                        <Button
                        onClick={() => navigate("/register")}
                            size="small"

                            sx={{ ml: 1, textTransform: "none" }}
                        >
                            Register
                        </Button>
                    </Typography>
                </div>
            </Paper>

            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar>
        </>
    );
}
