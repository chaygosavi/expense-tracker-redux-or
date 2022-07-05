const initialState = {
  expenseList: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseList: [...state.expenseList, action.payload],
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
      };
    default:
      return state;
  }
};
