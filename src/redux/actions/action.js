export const ADD_EXPENSE = (data) => {
  console.log(data);
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
