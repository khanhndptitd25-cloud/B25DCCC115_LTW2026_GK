// src/components/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const targetDate = new Date(`${date}T00:00:00`);

    const calculateTime = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsPast(true);
        setTimeLeft("");
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setTimeLeft(`Còn ${d} ngày ${h} giờ ${m} phút ${s} giây`);
      }
    };

    calculateTime(); // Chạy ngay lập tức để không trống giây đầu
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [date]);

  if (isPast) return <span>Sự kiện đã diễn ra</span>;
  return <span>{timeLeft}</span>;
};
export default Countdown;