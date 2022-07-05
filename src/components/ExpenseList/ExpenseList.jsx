import React from "react";
import Card from "../Card/Card";
import "./ExpenseList.css";

const ExpenseList = () => {
  const list = [
    {
      title: "Made a purchase",
      logo: "sfef",
      createdAt: Date.now(),
      amount: 1324,
    },
    {
      title: "Made a purchase",
      logo: "sfef",
      createdAt: Date.now(),
      amount: 1324,
    },
    {
      title: "Made a purchase",
      logo: "sfef",
      createdAt: Date.now(),
      amount: 1324,
    },
    {
      title: "Made a purchase",
      logo: "sfef",
      createdAt: Date.now(),
      amount: 1324,
    },
  ];
  return (
    <div>
      {list.length
        ? list.map((item, idx) => <Card key={idx} item={item} />)
        : null}
    </div>
  );
};

export default ExpenseList;
