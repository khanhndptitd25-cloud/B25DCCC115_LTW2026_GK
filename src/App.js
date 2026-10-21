import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventList from './pages/EventList';
import AddEvent from './pages/AddEvent';
import EventDetail from './pages/EventDetail';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios.get("/data/events.json", { signal: controller.signal })
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (!axios.isCancel(err)) {
          setError(true);
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  const handleRegister = (id) => {
    setEvents(events.map(ev => 
      ev.id === id ? { ...ev, registered: ev.registered + 1 } : ev
    ));
  };

  const handleDelete = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  const handleAdd = (newEvent) => {
    const nextId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
    setEvents([...events, { ...newEvent, id: nextId, registered: 0 }]);
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Không tải được dữ liệu</div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<EventList events={events} onRegister={handleRegister} onDelete={handleDelete} />} />
        <Route path="events/new" element={<AddEvent onAdd={handleAdd} />} />
        <Route path="events/:id" element={<EventDetail events={events} />} />
      </Route>
    </Routes>
  );
};
export default App;