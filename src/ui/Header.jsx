import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">SnapPizza Co.</Link>
      <SearchOrder />
      <p>Anu</p>
    </header>
  );
};

export default Header;
