import { useEffect, useState } from 'react';
import { Building2, Target, Heart, History } from 'lucide-react';

interface AboutData {
  title: string;
  content: {
    mission: string;
    vision: string;
    values: string[];
    history: string;
  };
}

const About = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/about')
      .then(res => res.json())
      .then(data => setAboutData(data))
      .catch(err => console.error('Error fetching about data:', err));
  }, []);

  if (!aboutData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto pl-20 pr-6 sm:px-6 md:pl-20 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          {aboutData.title}
        </h1>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {aboutData.content.mission}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {aboutData.content.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 sm:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            </div>
            <ul className="space-y-4">
              {aboutData.content.values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{value}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <History className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Story</h2>
                <p className="text-gray-600 leading-relaxed">
                  {aboutData.content.history}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
