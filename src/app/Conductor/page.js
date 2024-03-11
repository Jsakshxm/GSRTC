"use client"
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import supabase from '../utils/supabase';
import store from '../utils/store';
import Conductor_book from '../components/Conductor_book';

const Page = () => {
    const [Pickup, setPickup] = useState("");
    const [Destination, setDestination] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.from('bus').insert([
                { Pickup_location: Pickup, Destination_location: Destination }
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
            <div className="h-screen p-4 bg-gradient-to-b from-blue-500 to-blue-700">
            
               
                    
                <Conductor_book />
            </div>
        </Provider>
    );
}

export default Page;
