const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getVehicleMakes = async () => {
  const response = await fetch(
    `${BASE_URL}GetMakesForVehicleType/car?format=json`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch vehicle makes');
  }
  return await response.json();
};

export const getVehicleModelsByMakeAndYear = async (makeId, year) => {
  const response = await fetch(
    `${BASE_URL}GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch vehicle models');
  }
  return await response.json();
};
