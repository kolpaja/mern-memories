import React from 'react'
import useStyles from "./styles";
import moment from 'moment'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../redux/actions/posts"

function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDeletePost = () => dispatch(deletePost(post._id));
  const handleLikePost = () => dispatch(likePost(post._id));
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} component="div" image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        <Typography variant="body2" color="textSecondary">{post.tags && post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography variant="h5" className={classes.title} gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography component="p" color="textSecondary" >{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={handleLikePost}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={handleDeletePost}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>

    </Card>
  )
}

export default Post