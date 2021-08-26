import React, { useState } from 'react'
import useStyles from "./styles"
import GoogleLogin from 'react-google-login'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import Icon from './Icon';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Auth() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = () => { };

  const handleChange = () => { };

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevState) => !prevState);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    // console.log("google login res: ", res)
    try {
      const result = await res?.profileObj;
      const token = await res?.tokenId;
      dispatch({ type: "AUTH", data: { result, token } })
      history.push("/")
    } catch (error) {
      console.log(error)

    }

  };
  const googleError = () => {
    console.log("Google sign in error. Try again later")
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="85580178149-lkrd1gn06ss763fs9fonssn1sqo8qv3n.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                // disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>{isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}</Button>
            </Grid>
          </Grid>
        </form>

      </Paper>
    </Container>
  )
}

export default Auth
