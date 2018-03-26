import React from 'react';
import { HeaderWrapper, HeaderLink } from './style';

function Header() {

  return (
    <HeaderWrapper>
      <HeaderLink exact to="/" activeClassName="selected">Authors</HeaderLink>
      <HeaderLink to="/posts" activeClassName="selected">All Posts</HeaderLink>
      <HeaderLink to="/about" activeClassName="selected">About</HeaderLink>
    </HeaderWrapper>
  );
};

export default Header;
