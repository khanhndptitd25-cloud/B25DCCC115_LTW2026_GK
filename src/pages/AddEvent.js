import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEvent = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location || !date || !capacity) {
      setError('Vui lòng nhập đầy đủ thông tin phía dưới form');
      return;
    }
    const capNum = Number(capacity);
    if (!Number.isInteger(capNum) || capNum < 10 || capNum > 1000) {
      setError('Sức chứa phải từ 10 đến 1000');
      return;
    }
    
    onAdd({ name, location, date, capacity: capNum });
    navigate('/events', { replace: true });
  };

  return (
    <div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="name">Tên sự kiện</label>: <input id="name" value={name} onChange={e => setName(e.target.value)} /></div>
        <div><label htmlFor="location">Địa điểm</label>: <input id="location" value={location} onChange={e => setLocation(e.target.value)} /></div>
        <div><label htmlFor="date">Ngày diễn ra</label>: <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} /></div>
        <div><label htmlFor="capacity">Sức chứa</label>: <input type="number" id="capacity" value={capacity} onChange={e => setCapacity(e.target.value)} /></div>
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};
export default AddEvent;