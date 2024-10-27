// src/app/result/[makeId]/[year]/page.js
import VehicleModels from '@/components/VehicleModels';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import Link from 'next/link';
import { generateStaticParams } from '@/utils/staticParams';

export default function Result({ params }) {
  const { makeId, year } = params;

  return (
    <Suspense fallback={<Loading />}>
      <VehicleModels makeId={makeId} year={year} />
      <div className="mt-6">
        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            Back to Home
          </button>
        </Link>
      </div>
    </Suspense>
  );
}

export { generateStaticParams };
