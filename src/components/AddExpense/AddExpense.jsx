import React from "react";
import Form from "../Form/Form";
import Topfold from "../Topfold/Topfold";
import "./AddExpense.css";

const AddExpense = () => {
  return (
    <div className="add-expense">
      <Topfold />
      <Form />
    </div>
  );
};

export default AddExpense;
