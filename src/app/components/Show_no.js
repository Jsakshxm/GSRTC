"use client";
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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-blue-900">Bus Information</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">Bus Number</th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">Total Passengers</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.busNumber}>
                <td className="px-4 py-2 border-b border-gray-300">{bus.busNumber}</td>
                <td className="px-4 py-2 border-b border-gray-300">{bus.totalPassengers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowNo;
