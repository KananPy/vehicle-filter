import { getVehicleModelsByMakeAndYear } from '@/services/vehicleService';
import Button from '@/components/Button';
import Link from 'next/link';

export default async function Result({ params }) {
  const { makeId, year } = params;
  const data = await getVehicleModelsByMakeAndYear(makeId, year);
  const models = data.Results;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Vehicle Models for {year}</h1>

      {models.length > 0 ? (
        <ul className="list-disc pl-5">
          {models.map((model) => (
            <li key={model.Model_ID} className="border p-2 my-2">
              {model.Model_Name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No models found for this make and year.</p>
      )}

      {/* Back to Home Button */}
      <div className="mt-6">
        <Link href="/" passHref>
          <Button text="Back to Home" />
        </Link>
      </div>
    </div>
  );
}
