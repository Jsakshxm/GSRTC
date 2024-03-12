"use client";
import React, { useState } from "react";
import supabase from "../utils/supabase";
import { useDispatch, useSelector } from "react-redux";
import { addPeople } from "../utils/userslice"; 

const ConductorBook = () => { // Renamed component to follow camelCase convention
  const dispatch = useDispatch();
  const peopleCount = useSelector((state) => state.user.people);

  const [pickup, setPickup] = useState("S1");
  const [destination, setDestination] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pickup || !destination) {
      alert("Please select both pickup and destination!");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.from('bus').insert([
        { Pickup_location: pickup, Destination_location: destination }
      ]);
      if (error) {
        console.error('Error inserting data:', error.message);
        alert("Error booking bus. Please try again.");
      } else {
        console.log('Data inserted successfully:', data);
        dispatch(addPeople());
        alert("Ticket booked successfully! People count: " + peopleCount);
        setPickup("");
        setDestination("");
      }
    } catch (error) {
      console.error('Error inserting data:', error.message);
      alert("Error booking bus. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white pt-36"> {/* Changed background color to white */}
      <h1 className="mb-4 text-3xl font-bold text-black">Ticket Booking</h1> {/* Changed font color to black */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center text-xl">
          <label htmlFor="destination" className="text-lg">Select Destination:</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-2 border rounded-md"
            disabled={isSubmitting}
          >
            <option value="">Select Destination</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
            <option value="S4">S4</option>
            <option value="S5">S5</option>
            <option value="S6">S6</option>
            <option value="S7">S7</option>
            <option value="S8">S8</option>
          </select>
        </div>
        <div className="flex flex-col items-center text-xl">
          <label htmlFor="pickup" className="text-lg ">Select Pickup Stand:</label>
          <select
            id="pickup"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="p-2 border rounded-md"
            disabled={isSubmitting}
          >
            <option value="">Select Pickup</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
            <option value="S4">S4</option>
            <option value="S5">S5</option>
            <option value="S6">S6</option>
            <option value="S7">S7</option>
            <option value="S8">S8</option>
          </select>
        </div>
        <button
          type="submit"
          className={`bg-gradient-to-t from-blue-500 to-blue-600 shadow-xl text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Book Ticket"}
        </button>
      </form>
    </div>
  );
};

export default ConductorBook;
