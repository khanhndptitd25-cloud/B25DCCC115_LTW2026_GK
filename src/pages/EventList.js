import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import EventTable from '../components/EventTable';

const EventList = ({ events, onRegister, onDelete }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Tất cả');

  const filteredEvents = events.filter(ev => {
    const matchSearch = ev.name.toLowerCase().includes(search.toLowerCase());
    const isFull = ev.registered >= ev.capacity;
    const matchFilter = filter === 'Tất cả' ? true : (filter === 'Đã đầy' ? isFull : !isFull);
    return matchSearch && matchFilter;
  });

  return (
    <div>
      <FilterBar search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      <p>Tìm thấy {filteredEvents.length} sự kiện</p>
      {filteredEvents.length === 0 ? (
        <p>Không có dữ liệu</p>
      ) : (
        <EventTable events={filteredEvents} onRegister={onRegister} onDelete={onDelete} />
      )}
    </div>
  );
};
export default EventList;