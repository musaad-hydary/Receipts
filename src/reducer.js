export const initialState = {
    basket: [],
    user: null,
    spending: 0.0,
    drawer: false,
  };

  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "ADD_TOTAL":
        return {
          ...state,
          spending: parseFloat(state.spending) + parseFloat(action.price),
        };
      case "REMOVE_TOTAL":
        return {
          ...state,
          spending: parseFloat(state.spending) - parseFloat(action.price),
        };
      default:
        return state;
    }
  };
  
  export default reducer;