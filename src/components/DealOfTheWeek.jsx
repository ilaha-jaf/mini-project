import "./DealOfTheWeek.css";
import DealOfTheWeekImage from '../images/deal_ofthe_week.png';
import { useEffect, useState } from "react";

const DealOfTheWeek = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-08-09T00:00:00"); 

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); 
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="body-container">
      <div className="deal">
      <img src={DealOfTheWeekImage} alt="Deal Of The Week" />
      <div className="body-content">
        <h2>Deal Of The Week</h2>
        <hr />
        <div className="timer">
          <div className="timer-circle">
            {timeLeft.days}
            <span>Days</span>
          </div>
          <div className="timer-circle">
            {timeLeft.hours}
            <span>Hours</span>
          </div>
          <div className="timer-circle">
            {timeLeft.minutes}
            <span>Minutes</span>
          </div>
          <div className="timer-circle">
            {timeLeft.seconds}
            <span>Seconds</span>
          </div>
        </div>
        <button className="shop">Shop Now</button>
      </div>
      </div>
    </div>
  );
};

export default DealOfTheWeek;
