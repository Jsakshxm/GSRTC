"use client";
import React, { useState } from 'react';
import supabase from '../utils/supabase';
import Bus from '../components/Bus';
import Link from 'next/link';

const Page = () => {
    const [IsShowbus, setIsShowbus] = useState(false);
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsShowbus(true);
        setIsLoading(true);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-2 text-white border-white shadow-xl bg-gradient-to-b from-blue-500 to-blue-700">
            <h1 className='mb-8 text-4xl font-bold '>Welcome to Path-Ek App</h1>
            <img className='absolute ease-in ease-out bg-transparent border-yellow-300 rounded-full size-80 top-52 left-6 hover:size-96' src="https://st2.depositphotos.com/3687485/8235/v/450/depositphotos_82358242-stock-illustration-vector-cartoon-car-icon.jpg" alt="" />
            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">
                    <label htmlFor="destination" className='text-2xl'>Select your Destination:</label>
                    <select id="destination" className='p-2 text-2xl text-black bg-white rounded-lg' value={destination} onChange={(e) => setDestination(e.target.value)}>
                        <option value="">Select Destination</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                        <option value="S4">S4</option>
                        <option value="S5">S5</option>
                        <option value="S6">S6</option>
                        <option value="S7">S7</option>
                        <option value="S8">S8</option>
                        <option value="S9">S9</option>
                    </select>
                </div>
                <div className="flex items-center space-x-4">
                    <label htmlFor="pickup" className='text-2xl'>Select Your PickUp Stand:</label>
                    <select id="pickup" className='p-2 text-2xl text-black bg-white rounded-lg' value={pickup} onChange={(e) => setPickup(e.target.value)}>
                        <option value="">Select Pickup Stand</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                        <option value="S4">S4</option>
                        <option value="S5">S5</option>
                        <option value="S6">S6</option>
                        <option value="S7">S7</option>
                        <option value="S8">S8</option>
                        <option value="S9">S9</option>
                    </select>
                </div>
                <button className={`text-2xl px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition duration-300 scale-105`} onClick={handleSearch} disabled={isLoading}>
                    {isLoading ? 'Searched' : 'Search'}
                </button>
                {IsShowbus &&
                    <div>
                        <Link href="/Bus/1"><Bus ETA="8:05" ETD="8:45" no="B1" per="78" /></Link>
                        <Link href="/Bus/2"><Bus ETA="8:05" ETD="8:45" no="B2" per="55" /></Link>
                        <Link href="/Bus/3"><Bus ETA="8:45" ETD="9:25" no="B3" per="88" /></Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default Page;
