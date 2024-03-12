"use client";
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import supabase from '../utils/supabase';
import store from '../utils/store';
import ConductorBook from '../components/ConductorBook'; // Renamed component to follow camelCase convention

const Page = () => {
    const [pickup, setPickup] = useState("S1"); // Changed variable name to camelCase
    const [destination, setDestination] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.from('bus').insert([
                { Pickup_location: pickup, Destination_location: destination } // Changed variable name to camelCase
            ]);
            if (error) {
                console.error('Error inserting data:', error.message);
            } else {
                console.log('Data inserted successfully:', data);
            }
        } catch (error) {
            console.error('Error inserting data:', error.message);
        }
    };

    return (
        <Provider store={store}>
            <div className="h-screen p-4 bg-white"> {/* Changed background color to white */}
                <ConductorBook /> {/* Used proper component name */}
            </div>
        </Provider>
    );
}

export default Page;
