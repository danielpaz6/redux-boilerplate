import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import SinglePostPage from './components/SinglePostPage';
import Navbar from './components/Navbar';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/posts/:postId" component={SinglePostPage} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
