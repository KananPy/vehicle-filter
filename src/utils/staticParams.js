export async function generateStaticParams() {
  const popularMakes = ['Toyota', 'Honda', 'Ford'];
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear - 1];

  const params = [];

  for (const make of popularMakes) {
    for (const year of years) {
      params.push({ makeId: make, year: year.toString() });
    }
  }

  console.log('Generated static params:', params);

  return params;
}
