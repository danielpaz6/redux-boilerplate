import {
  Button, Container, Grid, Link, makeStyles, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';

export const useStyle = makeStyles((theme) => ({
  margin: {
    marginLeft: `${theme.spacing(1)}px`,
  },
  toolBar: {
    marginBottom: `${theme.spacing(5)}px`,
  },
}));

const Navbar = () => {
  const classes = useStyle();

  return (
    <Toolbar component="nav" className={classes.toolBar}>
      <Container maxWidth="md">
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="h5" color="inherit" noWrap>
              <Link href="/" color="textPrimary">My Blogs & Docomentations</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Button component="a" variant="contained" color="primary" className={classes.margin}>
              Posts
            </Button>
            <Button component="a" variant="contained" color="primary" className={classes.margin}>
              Users
            </Button>
            <Button component="a" variant="contained" color="primary" className={classes.margin}>
              Notifications
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default Navbar;
