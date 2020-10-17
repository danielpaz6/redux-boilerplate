import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  tag: {
    margin: theme.spacing(0.5),
  },
  tagSkeleton: {
    width: '50px',
    height: '30px',
    borderRadius: '20px',
    display: 'inline-block',
    marginRight: theme.spacing(1),
  },
  post: {
    marginBottom: theme.spacing(2),
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.post}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            2 days ago by <strong>User</strong>
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Chip className={classes.tag} label="Extra Soft" />
          <Chip className={classes.tag} color="primary" label="Soft" />
          <Chip className={classes.tag} label="Medium" />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export const LoadingPost = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.post}>
      <CardActionArea disabled>
        <CardContent>
          <Typography variant="h5" component="h2">
            <Skeleton width="30%" />
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <Skeleton width="10%" />
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <Skeleton />
            <Skeleton />
            <Skeleton style={{ marginBottom: 10 }} />
            <Skeleton variant="rect" className={classes.tagSkeleton} />
            <Skeleton variant="rect" className={classes.tagSkeleton} />
            <Skeleton variant="rect" className={classes.tagSkeleton} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
