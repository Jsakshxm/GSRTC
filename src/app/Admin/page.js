"use client";

import supabase from "../utils/supabase";
import { useEffect, useState } from "react";
import ShowNo from "../components/Show_no";
import { Provider } from "react-redux";
import store from "../utils/store";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Page = () => {
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isShowAllPass, setIsShowAllPass] = useState(false);
    const [showNo, setShowNo] = useState(false);
    const [isShowAnal, setIsShowAnal] = useState(false);
    
    const DynamicBarChart = dynamic(() => import("../components/Analytics"))
  
    useEffect(() => {
      const fetchBusData = async () => {
        const { data, error } = await supabase
          .from('bus')
          .select('Pickup_location, Destination_location, bus_no');
  
        if (error) {
          setError(error);
          setLoading(false);
        } else {
          setBuses(data);
          setLoading(false);
        }
      };
  
      fetchBusData();
    }, []);
  
    if (loading) return <div className="text-black">Loading...</div>; {/* Changed font color to black */}
    if (error) return <div className="text-black">Error: {error.message}</div>; {/* Changed font color to black */}
  
    return (
        <Provider store={store}>
          <Header />
        <div className="flex flex-row">
    <SideBar />
      <div className="p-4 bg-white">
        <h1 className="mb-4 text-3xl font-bold text-black">Bus Monitoring</h1> {/* Changed font color to black */}
        <div className="text-black ">
        <button className="text-black shadow-lg hover:text-yellow-400" onClick={() => setIsShowAllPass(!isShowAllPass)}> {/* Changed font color to black */}
          Show Tickets Booked
        </button>{" "}
        <br />
        <button className="btn hover:text-yellow-400" onClick={() => setShowNo(!showNo)}>
          Show Number of Passengers in Each Bus
        </button>{" "}
        <br />
        <button className="btn hover:text-yellow-400" onClick={() => setIsShowAnal(!isShowAnal)}>
          Show Analytics
        </button>{" "}
        </div>

        {isShowAllPass && 
        <table className="text-black border-2 border-collapse border-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2 text-yellow-400 border border-gray-600">S.No</th>
              <th className="px-4 py-2 text-yellow-400 border border-gray-600">Pickup Location</th>
              <th className="px-4 py-2 text-yellow-400 border border-gray-600">Destination Location</th>
              <th className="px-4 py-2 text-yellow-400 border border-gray-600">Bus No</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-600">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-600">{bus.Pickup_location}</td>
                <td className="px-4 py-2 border border-gray-600">{bus.Destination_location}</td>
                <td className="px-4 py-2 border border-gray-600">{bus.bus_no}</td>
              </tr>
            ))}
          </tbody>
        </table>}
        {showNo && <ShowNo />}
        {isShowAnal && <DynamicBarChart />}
      </div> </div>
      </Provider>
    );
  };
  
export default Page;
