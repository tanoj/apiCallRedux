
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return { ...state, loading: true };
    case 'ITEM_RECEIVED':
      return { ...state, items: action.data[2], loading: false }
    default:
      return state;
  }
};

export default reducer;
