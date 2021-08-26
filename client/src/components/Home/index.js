import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from '../Posts';
import Form from '../Form';
import useStyles from "./styles"
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/posts"

function Home() {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Grow in>
      <Container >
        <Grid className={classes.mainApp} container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}><Posts setCurrentId={setCurrentId} /></Grid>
          <Grid item xs={12} sm={4}><Form currentId={currentId} setCurrentId={setCurrentId} /></Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
