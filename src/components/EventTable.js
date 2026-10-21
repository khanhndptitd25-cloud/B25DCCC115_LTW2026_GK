import React from 'react';
import EventRow from './EventRow';

const EventTable = ({ events, onRegister, onDelete }) => (
  <table border="1" cellPadding="5" style={{marginTop: 10, borderCollapse: 'collapse'}}>
    <thead>
      <tr><th>Sự kiện</th><th>Địa điểm</th><th>Ngày</th><th>Số chỗ</th><th>Thao tác</th></tr>
    </thead>
    <tbody>
      {events.map(ev => <EventRow key={ev.id} event={ev} onRegister={onRegister} onDelete={onDelete} />)}
    </tbody>
  </table>
);
export default EventTable;