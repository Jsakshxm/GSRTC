import React from 'react';

const Bus = ({ ETA, ETD, no, per }) => {
  let textColor = '';
  let statusText = '';

  if (per < 60) {
    textColor = 'text-green-500'; // Green color for per < 60
    statusText = 'Vacant'; // Display "Vacant" for green color
  } else if (per >= 60 && per <= 95) {
    textColor = 'text-yellow-500'; // Yellow color for 60 <= per <= 95
    statusText = 'Almost Filling'; // Display "Balanced" for yellow color
  } else {
    textColor = 'text-red-500'; // Red color for per > 95
    statusText = 'Overcrowded'; // Display "Overcrowded" for red color
  }

  return (
    <div className='border-2 border-yellow-300 bg-gradient-to-t from-blue-500 to-blue-600'>
      <div className='p-2 m-2 rounded-sm shadow-2xl'>
        <h1 className='text-xl font-bold'>{no}</h1>
        <div className='inline-flex'>
          <p className='text-xl'>Expected Time of Arrival</p>
          <p className='text-xl ml-28'>Expected Time of Departure</p>
        </div>
        <div className='flex'>
          <p className={`text-slate-700 ${textColor}`}>{ETA}</p>
          <p className={`text-slate-700 ml-[310px] ${textColor}`}>{ETD}</p>
        </div>
        {/* Display the per value with the appropriate color */}
        <h1 className={`text-2xl font-bold ${textColor}`}> ({statusText})</h1>
      </div>
    </div>
  );
};

export default Bus;
