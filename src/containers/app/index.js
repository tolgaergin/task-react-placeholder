import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../../components/Layout/Header';
import Home from '../home';
import About from '../about';
import Posts from '../posts';
import UserPosts from '../posts/userPosts';
import Detail from '../posts/detail';

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    width: 960px;
    margin: 0 auto;
    padding: 20px 0 50px;
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => (
  <div>
    <Header />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/post/:postId" component={Detail} />
      <Route path="/posts/user/:userId" component={UserPosts} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;
