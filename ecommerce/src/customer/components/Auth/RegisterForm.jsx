import {
    Grid,
    TextField,
    Button,
    Paper,
    Typography,
    Snackbar,
    Alert,
  } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import {  useEffect, useState } from "react";
  import { getUser, register } from "../../../Redux/Auth/Action";

  export default function RegisterUserForm() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [openSnackBar,setOpenSnackBar]=useState(false);
    const { auth } = useSelector((store) => store);
    const handleClose=()=>setOpenSnackBar(false);
  
  const jwt=localStorage.getItem("jwt");

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  
  },[jwt])
  
  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true)
  }, [auth.user]);

     const handleSubmit =(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData={
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
            
          }
          console.log("user data",userData);
          dispatch(register(userData))
     }

    return (
      <div className="mt-0">
        <Paper elevation={4} className="w-full max-w-xl p-8 rounded-2xl">
          <Typography variant="h5" align="center" gutterBottom className="font-semibold text-gray-800">
            Create an Account
          </Typography>
  
          <form onSubmit={(e)=>handleSubmit(e)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
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
                  autoComplete="new-password"
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
                    ":hover": {
                      backgroundColor: "#7e3ff2",
                    },
                  }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
  
          <div className="mt-6 text-center">
            <Typography variant="body2">
              Already have an account?
              <Button onClick={()=> navigate("/login")}  size="small" className="ml-2" sx={{ textTransform: "none" }}>
                Login
              </Button>
            </Typography>
          </div>
        </Paper>
  
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar>
      </div>
    );
  }
  