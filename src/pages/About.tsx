import { useEffect, useState } from 'react';
import {getAbout} from '../api/about';

type AboutData = {
  text: string;
  // tambahkan properti lain jika ada
};


const About = () => {
  const [dataAbout, setDataAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
          try {
            const response = await getAbout();
            setDataAbout(response);
          } catch (error) {
            console.error("Error fetching projects:", error);
          }
        }
        loadProjects();
  }, []);

  console.log(dataAbout);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang Saya
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mengenal lebih dekat tentang perjalanan dan passion saya dalam dunia teknologi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Biography Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Salam kenal!
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              {dataAbout?.text}
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Keahlian Utama</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
