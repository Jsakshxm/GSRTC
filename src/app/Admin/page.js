"use client"
import supabase from "../utils/supabase";
import { useEffect, useState } from "react";
import ShowNo from "../components/Show_no";
import { Provider } from "react-redux";
import store from "../utils/store";
import Analytics from "../components/Analytics";
import dynamic from "next/dynamic";

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
  
    if (loading) return <div className="text-white">Loading...</div>;
    if (error) return <div className="text-white">Error: {error.message}</div>;
  
    return (
        <Provider store={store}>
      <div className="p-4 bg-blue-900">
        <h1 className="mb-4 text-3xl font-bold text-white">Bus Monitoring</h1>
        <div className="text-white "> 
        <button className="text-white shadow-lg hover:text-yellow-400" onClick={() => { setIsShowAllPass(!isShowAllPass) }}>Show Tickets Booked</button> <br />
        <button className="btn hover:text-yellow-400" onClick={() => { setShowNo(!showNo) }}>Show Number of Passengers in Each Bus</button> <br />
        <button className="btn hover:text-yellow-400" onClick={() => { setIsShowAnal(!isShowAnal) }}>Show Analytics</button> </div>

        {isShowAllPass && 
        <table className="text-white border-2 border-collapse border-gray-600">
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
      </div>
      </Provider>
    );
  };
  
export default Page;
