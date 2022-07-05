import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { DELETE_EXPENSE } from "../../redux/actions/action";
import "./Card.css";

const Card = ({ item }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className="card-image-container">
        <img
          src={item.category.icon}
          alt={item.category.title}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label htmlFor="" className="card-amount">
            {" "}
            ₹ {item.amount}
          </label>
        </div>
        <div
          className="delete-icon"
          onClick={() => {
            dispatch(DELETE_EXPENSE(item));
            toast.success("Expense Deleted");
          }}
        >
          <i className="fi-rr-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
