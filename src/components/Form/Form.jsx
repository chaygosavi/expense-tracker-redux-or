import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ADD_EXPENSE } from "../../redux/actions/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categories } from "../dropdown";
import "./Form.css";
import SuccessModal from "./SuccessModal";

const Form = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title == "" || amount == "" || !category) {
      toast.error("Please enter valid data!");
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(ADD_EXPENSE(data));
    setModalOpen(true);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setOpen(false);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  return (
    <div className="form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Give a name to your expenditure"
          id="title"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="title">Amount ₹</label>
        <input
          placeholder="Enter Amount"
          id="title"
          value={amount}
          onChange={(e) => handleAmount(e)}
          className="amount-input"
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div className="category-dropdown" onClick={() => setOpen(!open)}>
            <label>{category ? category.title : "Category"}</label>
            <i className="fi-rr-angle-down"></i>
          </div>
          {open && (
            <div className="category-container">
              {categories.map((item) => (
                <div
                  onClick={() => handleCategory(item)}
                  key={item.id}
                  className="category-item"
                  style={{
                    borderRight: `5px solid ${item.color}`,
                  }}
                >
                  <label>{item.title}</label>
                  <img src={item.icon} alt={item.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i className="fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default Form;
