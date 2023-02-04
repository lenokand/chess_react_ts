import React, {useEffect, useState } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDate(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  
    const secondAngle = (date.getSeconds() / 60) * 360;
    const minuteAngle = (date.getMinutes() / 60) * 360 + (date.getSeconds() / 60) * 6;
    const hourAngle = (date.getHours() / 12) * 360 + (date.getMinutes() / 60) * 30;
  
    return (
      <div className="clock">
        <div className="clock-face">
          <div className="clock-center"></div>
          <div
            className="clock-hand clock-hand-seconds"
            style={{ transform: `rotate(${secondAngle}deg) translate(0% , 50%)` }}
          ></div>
          <div
            className="clock-hand clock-hand-minutes"
            style={{ transform: `rotate(${minuteAngle}deg) translateY(-50%) translateX(0%)` }}
          ></div>
          <div
            className="clock-hand clock-hand-hours"
            style={{ transform: `rotate(${hourAngle}deg) translateY(-50%) translateX(-50%)` }}
          ></div>
        </div>
      </div>
    );
  }
  

export default Clock;