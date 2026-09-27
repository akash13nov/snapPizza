import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-wider">
        SnapPizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
