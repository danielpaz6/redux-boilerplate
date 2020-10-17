import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Post, { LoadingPost } from './Post';
import Search from './Search';

// eslint-disable-next-line react/no-array-index-key
const Loading = (amount) => new Array(amount).fill().map((_, idx) => <LoadingPost key={idx} />);

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore] = useState(true);
  const loadItems = (page) => {
    setTimeout(() => {
      setPosts((oldPosts) => [...oldPosts, page, page, page, page]);
    }, 500);
  };

  const items = posts.map((post, idx) => <Post key={post.id || idx} />);

  // if (!posts.length) return Loading(5);

  return (
    <>
      <Search />
      <Typography variant="caption">Showing {posts.length} result{posts.length ? 's' : null}</Typography>
      <InfiniteScroll pageStart={0} loadMore={loadItems} hasMore={hasMore} loader={Loading(3)}>
        {items}
      </InfiniteScroll>
    </>
  );
};

export default PostList;
