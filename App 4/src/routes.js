import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts-index';
import PostCreate from './components/post-create';
import PostShow from './components/post-show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/create" component={PostCreate} />
    <Route path="posts/:id" component={PostShow} />
  </Route>
);