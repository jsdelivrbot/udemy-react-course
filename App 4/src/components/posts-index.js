import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    //Good place to fetch data.
    this.props.fetchPosts();
  }
  render() {
    return (<div>List of Blog Posts</div>);
  }
};

function mapDispatchToProps(dispatch) {
  //This gives us this.props.fetchPosts as a func on the class.
  //This corresponds to the fetchPosts action in ../actions/index.js
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);