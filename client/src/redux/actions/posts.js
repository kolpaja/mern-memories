import * as api from "../../api";
import postTypes from "../constants/postTypes"

//Action creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // console.log("FETCH_ALL:, ", data)
    dispatch({
      type: postTypes.FETCH_ALL, payload: data
    })
  } catch (error) {
    console.log("fetching posts from db error: ", error.message)
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: postTypes.CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}


export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: postTypes.UPDATE, payload: data });
  } catch (error) {
    console.log("update post action: ", error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: postTypes.DELETE, payload: id })
  } catch (error) {
    console.log("delete post error: ", error)

  }
}

export const likePost = id => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: postTypes.LIKE_POST, payload: data });
  } catch (error) {
    console.log("like post error: ", error)
  }
}