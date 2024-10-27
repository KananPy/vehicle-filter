// src/app/page.js
'use client';

import { useState, useEffect } from 'react';
import { getVehicleMakes } from '@/services/vehicleService';
import Link from 'next/link';

export default function Home() {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => i + 2015);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const data = await getVehicleMakes();
        const sortedMakes = data.Results.sort((a, b) =>
          a.MakeName.localeCompare(b.MakeName)
        );
        setMakes(sortedMakes);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    };
    fetchMakes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Select Vehicle Make and Model Year
      </h1>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Vehicle Make</label>
        <select
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="border p-2 rounded w-full text-black"
        >
          <option value="">Select Vehicle Make</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Model Year</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border p-2 rounded w-full text-black"
        >
          <option value="">Select Model Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <Link href={`/result/${selectedMake}/${selectedYear}`} passHref>
        <button
          disabled={!selectedMake || !selectedYear}
          className={`${
            !selectedMake || !selectedYear
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white font-bold py-2 px-4 rounded-lg w-full`}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
