'use client';

import { useState, useEffect } from 'react';
import { getVehicleMakes } from '@/services/vehicleService';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
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
        const sortedMakes = data.Results.map((make) => ({
          label: make.MakeName,
          value: make.MakeId,
        })).sort((a, b) => a.label.localeCompare(b.label));
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

      <Dropdown
        label="Vehicle Make"
        options={makes}
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
      />

      <Dropdown
        label="Model Year"
        options={years.map((year) => ({ label: year, value: year }))}
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      />

      <Link href={`/result/${selectedMake}/${selectedYear}`} passHref>
        <Button text="Next" disabled={!selectedMake || !selectedYear} />
      </Link>
    </div>
  );
}
