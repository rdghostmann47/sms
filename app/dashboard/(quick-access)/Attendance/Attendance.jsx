"use client"
import React, { useState } from 'react';

const TeacherAttendance = () => {
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [lateTime, setLateTime] = useState('0 minutes');

  const checkIn = () => {
    const currentTime = new Date();
    setCheckInTime(currentTime);

    const checkInThreshold = new Date();
    checkInThreshold.setHours(7, 30, 0, 0); // 7:30 AM

    if (currentTime > checkInThreshold) {
      const diff = Math.floor((currentTime - checkInThreshold) / (1000 * 60)); // Difference in minutes
      setLateTime(`${diff} minutes`);
    } else {
      setLateTime('0 minutes');
    }
  };

  const checkOut = () => {
    setCheckOutTime(new Date());
  };

  const formatTime = (date) => {
    if (!date) return '0';
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes}${ampm}`;
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="shadow-lg p-6 bg-white rounded-lg">
        <div className="flex flex-col items-center">
          <div className="w-full grid grid-cols-3 border border-black">
            <div className="col-span-2 border border-black">
              <h3 className="text-xl font-bold mb-4">Your Attendance</h3>

            <div className="grid grid-cols-2 gap-2">
            <div className=" mb-4">
                <p className="mr-2">In time:</p>
                <p className="font-bold">{formatTime(checkInTime)}</p>
              </div>
              <div className=" mb-4">
                <p className="mr-2">Out time:</p>
                <p className="font-bold">{formatTime(checkOutTime)}</p>
              </div>
            </div>
            </div>
            <div className="">
              image
            </div>

          </div>

          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-2xl"
              onClick={checkIn}
            >
              Check in
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-2xl"
              onClick={checkOut}
            >
              Check out
            </button>
          </div>
        </div>
        <div className="w-[80%] mx-auto flex items-center justify-center space-x-3 mt-6">
          <div className=" mb-2">
            <p className="mr-2">Check in:</p>
            <p className="font-bold">{formatTime(checkInTime)}</p>
          </div>
          <div className=" mb-2">
            <p className="mr-2">Check out:</p>
            <p className="font-bold">{formatTime(checkOutTime)}</p>
          </div>
          <div className="">
            <p className="mr-2">Late time:</p>
            <p className="font-bold">{lateTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAttendance;
