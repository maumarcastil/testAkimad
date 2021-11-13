const initialState = {
  users: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_REQUEST":
      return {
        ...state,
        users: action.payload,
      };
    case "LOADING_REQUEST":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
