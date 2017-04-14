import React, { Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostCreate extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    console.log(title);
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
};

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  return errors;
}

//connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first is config, second is mapStateTOProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsCreateForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostCreate);