//state arg is not application state, but
//rather the state previously set by this reducer
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}