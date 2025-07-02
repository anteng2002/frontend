import { useEffect, useState } from 'react';
import {getAbout} from '../api/about';
import foto  from '../assets/foto.jpg';
import { Mail, MapPin, Phone, School } from 'lucide-react';

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
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mengenal lebih dekat tentang perjalanan dan passion saya dalam dunia teknologi
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={foto}
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
              Hallo Semua
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              {/* {dataAbout?.text} */}
              Seorang mahasiswa aktif di STMIK Widya Utama Purwokerto jurusan Teknik Informatika. Saya memiliki latar belakang pendidikan di bidang Otomatisasi Tata Kelola Perkantoran dan sedang mengembangkan minat serta keahlian di bidang data analyst. <br /> <br />Saya memiliki pengalaman magang di instansi pemerintahan seperti DPPKBP3A dan Pengadilan Agama Purwokerto, yang membentuk kemampuan saya dalam mengelola data, memahami sistem kerja administratif, dan mengembangkan solusi berbasis teknologi.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Keahlian Utama</h3>
              <div className="flex flex-wrap gap-3">
                {['Analisis Data', 'Microsoft Excel', 'Google Sheets', 'Visualisasi Data', 'Administrasi Perkantoran', 'Komunikasi & Kerja Tim'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pendidikan</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <School className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">STMIK WIDYA UTAMA PURWOKERTO</h3>
                  <p className="text-gray-600">S1 Teknik Informatika</p>
                  <p className="text-gray-600">2022 – 2026</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <School className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">SMK N 1 BANYUMAS</h3>
                  <p className="text-gray-600">Jurusan Otomatisasi Tata Kelola Perkantoran</p>
                  <p className="text-gray-600">2019 – 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
