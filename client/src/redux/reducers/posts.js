// eslint-disable-next-line
import postTypes from "../constants/postTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case postTypes.FETCH_ALL:
      return action.payload;
    case postTypes.CREATE:
      return [...posts, action.payload];
    case postTypes.UPDATE:
      return posts.map(post => post._id === action.payload._id ? action.payload : post);
    case postTypes.LIKE_POST:
      return posts.map(post => post._id === action.payload._id ? action.payload : post);
    case postTypes.DELETE:
      return posts.filter(post => post._id !== action.payload)
    default:
      return posts
  }
}