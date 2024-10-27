import { getVehicleModelsByMakeAndYear } from '@/services/vehicleService';

export default async function VehicleModels({ makeId, year }) {
  const data = await getVehicleModelsByMakeAndYear(makeId, year);
  const models = data.Results;

  return (
    <div>
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
    </div>
  );
}
