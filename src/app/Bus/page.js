"use client";
import React, { useState } from 'react';
import Bus from '../components/Bus';
import Header from '../components/Header';
import Link from 'next/link';
import SideBar from '../components/SideBar';

const Page = () => {
    const [isShowBus, setIsShowBus] = useState(false);
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSearch = async () => {
        setIsLoading(true);
        // Simulate data fetching or processing delay
        setTimeout(() => {
            setIsLoading(false);
            setIsShowBus(true);
        }, 1000);
    }

    // Options for pickup and destination stands
    const options = [
        { value: "", label: "Select Stand" },
        { value: "S1", label: "S1" },
        { value: "S2", label: "S2" },
        { value: "S3", label: "S3" },
        { value: "S4", label: "S4" },
        { value: "S5", label: "S5" },
        { value: "S6", label: "S6" },
        { value: "S7", label: "S7" },
        { value: "S8", label: "S8" },
        { value: "S9", label: "S9" },
    ];

    return (
        <div> <Header />
        <div className="flex flex-row">
    <SideBar />
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-2 text-gray-800">
        
        <h1 className='mb-8 text-4xl font-bold'>Welcome to Path-Ek App</h1>
        <div className="relative flex items-center space-x-4">
            <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">
                    <label htmlFor="destination" className='text-2xl'>Select your Destination:</label>
                    <select id="destination" className='p-2 text-2xl text-black bg-white rounded-lg' value={destination} onChange={(e) => setDestination(e.target.value)}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center space-x-4">
                    <label htmlFor="pickup" className='text-2xl'>Select Your PickUp Stand:</label>
                    <select id="pickup" className='p-2 text-2xl text-black bg-white rounded-lg' value={pickup} onChange={(e) => setPickup(e.target.value)}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <button className={`text-2xl px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition duration-300 scale-105`} onClick={handleSearch} disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
                {isShowBus && (
                    <div>
                        <Link href="/Bus/1"><Bus ETA="8:05" ETD="8:45" no="B1" per="78" cp="7" /></Link>
                        <Link href="/Bus/2"><Bus ETA="8:05" ETD="8:45" no="B2" per="55"  cp="5"/></Link>
                        <Link href="/Bus/3"><Bus ETA="8:45" ETD="9:25" no="B3" per="88" cp="7" /></Link>
                    </div>
                )}
            </div>
        </div>
    </div>
</div> </div>

    );
}

export default Page;
