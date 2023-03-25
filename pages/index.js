import { useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
// import Navbar from '@/components/Navbar';
import SignoutButton from '../components/SignoutButton'



export default function Home({ earthquakeData }) {
  const [selectedCountry, setSelectedCountry] = useState('');

  // Code to filter the earthquake data based on the selected country
  const filteredData = earthquakeData.filter(data => {
    const place = data.properties.place;
    const country = place.substring(place.lastIndexOf(',') + 2).toLowerCase();
    return country === selectedCountry.toLowerCase();
  });

  // Code to create the options for the select element
  const countryOptions = [...new Set(earthquakeData.map(data => {
    const place = data.properties.place;
    return place.substring(place.lastIndexOf(',') + 2);
  }))].sort().map(country => (
    <option key={country} value={country}>{country}</option>
  ));

  return (
    <div>
<Navbar/>
      
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
  <option selected>Choose a country</option>
      {countryOptions}
  
</select>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                Magnitude
                </th>
                <th scope="col" className="px-6 py-3">
                Place
                </th>
                <th scope="col" className="px-6 py-3">
                Coordinates
                </th>
            </tr>
        </thead>
        <tbody>
        {filteredData.map(data => (
            <tr className="bg-blue-500 border-b border-blue-400" key={data.id}>
                
                <td className="px-6 py-4">
                {data.properties.mag}
                </td>
                <td className="px-6 py-4">
                {data.properties.place}
                </td>
                <td className="px-6 py-4">
                {data.geometry.coordinates.join(', ')}
                </td>
            </tr>
             ))}
            
        </tbody>
    </table>
</div>

    </div>
  );
}

Home.auth = true
export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/quake');
  const earthquakeData = response.data.features;
  return { props: { earthquakeData } };
}
