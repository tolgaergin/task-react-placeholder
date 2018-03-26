import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserPosts } from '../../store/UserPosts/action';

import PostsList from '../../components/Posts';
import Title from '../../components/Layout/Title';

class UserPosts extends Component {

  componentDidMount() {
    // fetch the posts
    this.props.getUserPosts(this.props.match.params.userId);
  }

  render() {
    const {
      isFetching,
      postsList,
      user,
    } = this.props;

    return (
      <div>
        <Title title={`${user.name}'s Posts`} />
        <PostsList
          isFetching={isFetching}
          posts={postsList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userPosts } = state;
  return {
    isFetching: userPosts.isFetching,
    postsList: userPosts.dataPosts,
    user: userPosts.dataUser,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUserPosts,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
