import {
  Breadcrumbs, Divider, Link, Typography,
} from '@material-ui/core';
import React from 'react';

const SinglePostPage = () => (
  <>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home Page
      </Link>
      <Typography color="textPrimary">New post</Typography>
    </Breadcrumbs>
    <Divider />
    <br />
    <Typography variant="h2">Hello World</Typography>
    <Typography variant="caption" gutterBottom>
      Time: 2 hours ago | Tags: Tag1, Tag2, Tag
    </Typography>
    <br />
    <br />
    <Typography paragraph>Hello bla bla bla..</Typography>
  </>
);

export default SinglePostPage;
