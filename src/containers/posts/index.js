import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts, postsShouldFetch } from '../../store/Posts/actions';

import PostsList from '../../components/Posts';
import Title from '../../components/Layout/Title';

class Posts extends Component {

  componentDidMount() {
    // fetch the posts
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.postsShouldFetch !== nextProps.postsShouldFetch) {
      this.props.getPosts();
    }
  }

  render() {
    const {
      isFetching,
      postsList,
      postsShouldFetch,
    } = this.props;

    return (
      <div>
        <Title title="All Posts" />
        <PostsList
          isFetching={isFetching}
          posts={postsList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts } = state;
  return {
    isFetching: posts.isFetching,
    postsList: posts.data,
    postsShouldFetch: posts.shouldFetch,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getPosts,
    postsShouldFetch,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
