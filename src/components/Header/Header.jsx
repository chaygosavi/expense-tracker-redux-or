import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpensr
          <i class="fi fi-rr-credit-card" />.
        </div>
        <div className="header-button">
          <a
            href="https://github.com/chaygosavi/expense-tracker-redux-or"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <i className="devicon-github-original" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
