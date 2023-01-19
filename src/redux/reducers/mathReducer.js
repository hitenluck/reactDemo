const initialState = {
  result: 0,
  name: 'test'

};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {...state, result: state.result + 1};
    }
    case 'SUBS': {
      return {...state, result: state.result - 1};
    }
    default:
      return state;
  }
};

export default reducer;
