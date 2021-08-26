import React, { useState, useEffect } from 'react'
import useStyles from "./styles";
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/actions/posts"

function Form({ currentId, setCurrentId }) {
  const classes = useStyles();
  const [postData, setPostData] = useState({ creator: "", title: "", tags: "", selectedFile: "", message: "" })
  const dispatch = useDispatch();
  const post = useSelector((state) => (currentId ? state.posts.find((post) => post._id === currentId) : null));

  useEffect(() => {
    if (post) setPostData(post)

  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      // console.log(`updating post with id: ${currentId}`)
      dispatch(updatePost(currentId, postData));
    } else dispatch(createPost(postData));

    // console.log("form submit,", postData);
    setPostData({ creator: "", title: "", tags: "", selectedFile: "", message: "", });
  };

  const clear = () => {
    setPostData({ creator: "", title: "", tags: "", selectedFile: "", message: "", });
    // console.log("clear form: ", postData)
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Editing " : "Time for "}a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} required onChange={e => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField name="title" variant="outlined" label="Title" required fullWidth value={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={e => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={e => setPostData({ ...postData, tags: e.target.value.split(",") })}
        />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button className={classes.buttonSubmit} color="primary" size="large" type="submit" fullWidth>Remember</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
