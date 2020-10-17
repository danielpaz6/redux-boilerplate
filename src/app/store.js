import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../slices/posts';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
