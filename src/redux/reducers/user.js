const initialState = {
  user: null,
  error: null,
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'SET_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default user;
