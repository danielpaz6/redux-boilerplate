import axios from 'axios';

const getPosts = async (endpoint, params) => {
  try {
    const posts = await axios.get(endpoint, params);
    return posts.data;
  } catch (error) {
    return error;
  }
};

export default getPosts;
