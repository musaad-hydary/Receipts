export const initialState = {
    basket: [],
    user: null,
    drawer: false,
  };

  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      default:
        return state;
    }
  };
  
  export default reducer;