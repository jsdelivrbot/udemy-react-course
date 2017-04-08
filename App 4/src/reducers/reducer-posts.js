import FETCH_POSTS from '../actions/index.js';
const INITIAL_STATE = {
  all: [], //List of blog posts
  post: null //Individual post
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data
      };
    default:
      return state;
  }
}