import React from 'react';

const Home = ({ events }) => {
  const totalEvents = events.length;
  const totalRegistered = events.reduce((sum, ev) => sum + ev.registered, 0); 
  const fullEvents = events.filter(ev => ev.registered >= ev.capacity).length;

  return (
    <div>
      <h2>Sự kiện CLB</h2>
      <h3>Trang chủ</h3>
      <p>Tổng số sự kiện: {totalEvents}</p>
      <p>Tổng số lượt đăng ký: {totalRegistered}</p>
      <p>Số sự kiện đã đầy: {fullEvents}</p>
    </div>
  );
};
export default Home;