export const ADD_EXPENSE = (data) => {
  return {
    type: "ADD_EXPENSE",
    payload: data,
  };
};

export const DELETE_EXPENSE = (data) => {
  return {
    type: "DELETE_EXPENSE",
    payload: data,
  };
};

export const SEARCH_EXPENSE = (query) => {
  return {
    type: "SEARCH_EXPENSE",
    payload: query,
  };
};
