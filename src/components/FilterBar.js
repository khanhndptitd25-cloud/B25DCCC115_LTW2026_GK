import React from 'react';

const FilterBar = ({ search, setSearch, filter, setFilter }) => (
  <div>
    <label htmlFor="search">Tìm kiếm: </label>
    <input id="search" value={search} onChange={e => setSearch(e.target.value)} />
    <label htmlFor="filter" style={{marginLeft: 10}}>Tình trạng: </label>
    <select id="filter" value={filter} onChange={e => setFilter(e.target.value)}>
      <option value="Tất cả">Tất cả</option>
      <option value="Còn chỗ">Còn chỗ</option>
      <option value="Đã đầy">Đã đầy</option>
    </select>
  </div>
);
export default FilterBar;