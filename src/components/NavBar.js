import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* Sử dụng end để style menu được áp dụng đúng[cite: 4] */}
      <NavLink to="/" end>Trang chủ</NavLink> | 
      <NavLink to="/events" end>Danh sách</NavLink> | 
      <NavLink to="/events/new" end>Thêm mới</NavLink>
    </nav>
  );
};
export default NavBar;