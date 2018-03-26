import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers, usersShouldFetch } from '../../store/Users/actions';

import UsersList from '../../components/Users';

class Home extends Component {

  componentDidMount() {
    // fetch the users
    this.props.getUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.usersShouldFetch !== nextProps.usersShouldFetch) {
      this.props.getUsers();
    }
  }

  render() {
    const {
      isFetching,
      usersList,
      usersShouldFetch,
    } = this.props;

    return (
      <div>
        <UsersList
          isFetching={isFetching}
          users={usersList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return {
    isFetching: users.isFetching,
    usersList: users.data,
    usersShouldFetch: users.shouldFetch,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUsers,
    usersShouldFetch,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
