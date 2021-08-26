import React from 'react';
import Post from './Post';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from "./styles";
import { useSelector } from "react-redux"

function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector(state => state.posts)

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} alignItems="stretch" container spacing={3}>
        {
          posts.map(post => (
            <Grid item key={post._id} xs={12} sm={6}>
              <Post setCurrentId={setCurrentId} post={post} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Posts
