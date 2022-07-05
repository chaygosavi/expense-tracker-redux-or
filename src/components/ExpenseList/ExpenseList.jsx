import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./ExpenseList.css";

const ExpenseList = () => {
  const { expenseList: lists, query } = useSelector(
    (state) => state.expenseReducer
  );
  const filteredList = lists.filter((item) => {
    const querie = query.toLowerCase();
    const itemTitle = item.title.toLowerCase();
    return itemTitle.includes(querie);
  });

  console.log("filteredList => ", filteredList);

  return (
    <div className="expense-list">
      {filteredList.length ? (
        filteredList.map((item) => <Card key={item.title} item={item} />)
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="Empty List"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty</label>
        </div>
      )}
    </div>
  );
};
export default ExpenseList;
