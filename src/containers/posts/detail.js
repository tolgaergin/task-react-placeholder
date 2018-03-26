import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPostsDetail } from '../../store/Posts/actions';

import CommentsList from '../../components/Comments';
import Title from '../../components/Layout/Title';
import PostSingle from '../../components/Posts/PostSingle';

class Detail extends Component {

  componentDidMount() {
    // fetch the posts
    this.props.getPostsDetail(this.props.match.params.postId);
  }

  render() {
    const {
      isFetching,
      dataPost,
      dataComments,
    } = this.props;

    return (
      <div>
        <PostSingle post={dataPost} isFetching={isFetching} />
        <Title title="Comments" />
        <CommentsList
          isFetching={isFetching}
          comments={dataComments} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { details } = state;
  return {
    isFetching: details.isFetching,
    dataPost: details.dataPost,
    dataComments: details.dataComments,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getPostsDetail,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
