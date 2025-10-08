import { useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';

interface CareersData {
  title: string;
  status: string;
}

const Careers = () => {
  const [careersData, setCareersData] = useState<CareersData | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/careers')
      .then(res => res.json())
      .then(data => setCareersData(data))
      .catch(err => console.error('Error fetching careers data:', err));
  }, []);

  if (!careersData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto pl-20 pr-6 sm:px-6 md:pl-20 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            {careersData.title}
          </h1>

          <div className="bg-gray-50 rounded-xl p-12 border-2 border-gray-200">
            <p className="text-2xl sm:text-3xl font-semibold text-gray-700">
              {careersData.status}
            </p>
          </div>

          <p className="mt-12 text-lg text-gray-600">
            We appreciate your interest in joining our team. Please check back later for future opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
