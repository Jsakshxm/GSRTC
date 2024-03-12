import React from 'react';

const Bus = ({ ETA, ETD, no, per ,cp}) => {
  let textColor = '';
  let statusText = '';

  if (per < 60) {
    textColor = 'text-green-500'; // Green color for per < 60
    statusText = 'Vacant'; // Display "Vacant" for green color
  } else if (per >= 60 && per <= 95) {
    textColor = 'text-yellow-500'; // Yellow color for 60 <= per <= 95
    statusText = 'Almost Filling'; // Display "Almost Filling" for yellow color
  } else {
    textColor = 'text-red-500'; // Red color for per > 95
    statusText = 'Overcrowded'; // Display "Overcrowded" for red color
  }

  return (
    <div className='p-4 pb-2 m-2 bg-white border-2 border-yellow-300 rounded-lg shadow-md'>
      <h1 className='text-xl font-bold text-blue-700'>{no}</h1>
      <div className='flex justify-between mt-4'>
        <p className='text-lg'>Expected Time of Arrival: {ETA}</p> <br />
        <p className='text-lg'>Expected Time of Departure: {ETD}</p> <br />
        <div className='block '> <br />
        <p> Current Passengers: {cp} </p> 
       <p> Capacity:10 </p> </div>
      </div>
      <h2 className={`text-2xl font-bold ${textColor} mt-4`}>{statusText}</h2>
    </div>
  );
};

export default Bus;
