"use client"
import React from 'react';
import { useSelector } from 'react-redux';

const ShowNo = () => {
  const people = useSelector((state) => state.user.people); // Access people from Redux

  const buses = [
    { busNumber: 1, totalPassengers: people }, // Use the actual people value here
    { busNumber: 2, totalPassengers: 8 },
    { busNumber: 3, totalPassengers: 5 },
    { busNumber: 4, totalPassengers: 4 },
    { busNumber: 5, totalPassengers: 8 },
  ];

  return (
    <div className="p-4 text-white bg-blue-900">
      <h1 className="mb-4 text-3xl font-bold">Bus Information</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-white">Bus Number</th>
            <th className="px-4 py-2 border border-white">Total Number of Passengers</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.busNumber}>
              <td className="px-4 py-2 border border-white">{bus.busNumber}</td>
              <td className="px-4 py-2 border border-white">{bus.totalPassengers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowNo;
