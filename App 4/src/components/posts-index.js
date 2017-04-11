import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    //Good place to fetch data.
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/create" className="btn btn-primary">
            Add Post
          </Link>
        </div>
      </div>
    );
  }
};

export default connect(null, { fetchPosts })(PostsIndex);