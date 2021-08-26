import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import useStyles from "./styles";
import { useDispatch } from "react-redux"
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import memories from "../../images/memories.png";

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  // console.log("user: ", user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push('/');
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')))
    //JWT
  }, [location])

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" >
          Memories <img className={classes.image} src={memories} alt="memories" height="60" />
        </Typography>
      </div>
      <Toolbar>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" className={classes.logout} color="primary" >Login</Button>
        )}
      </Toolbar>
    </AppBar >
  )
}

export default Navbar
