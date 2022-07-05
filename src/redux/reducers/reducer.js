const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};

const initialState = {
  expenseList: initialList(),
  query: "",
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expenseList, action.payload])
      );
      return {
        ...state,
        expenseList: [...state.expenseList, action.payload],
      };

    case "DELETE_EXPENSE":
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== action.payload.createdAt
      );
      localStorage.setItem("expense-list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };

    case "SEARCH_EXPENSE":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};
