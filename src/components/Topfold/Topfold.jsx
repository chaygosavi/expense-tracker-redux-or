import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SEARCH_EXPENSE } from "../../redux/actions/action";
import "./Topfold.css";

const Topfold = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(SEARCH_EXPENSE(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fi-rr-search"></i>
            <input
              type="text"
              placeholder="Search for expenses"
              value={search}
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <Link to={"/add-expense"}>
            <div className="add-buttton">
              <i className="fi-rr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to={"/"}>
            <div className="add-topfold-button">
              <i className="fi-rr-angle-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="add-topfold-button">
              <i className="fi-rr-cross-circle"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topfold;
