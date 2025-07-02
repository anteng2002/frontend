
const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Magang Kantor DPPKBP3A",
      company: "Tech Solutions Indonesia",
      period: "2022 - Sekarang",
      description: [
        "Memimpin tim pengembangan untuk proyek e-commerce skala besar dengan 100K+ pengguna aktif",
        "Mengimplementasikan arsitektur microservices menggunakan Node.js dan React",
        "Meningkatkan performa aplikasi hingga 40% melalui optimisasi database dan caching",
        "Mentoring junior developer dan melakukan code review secara rutin"
      ]
    },
    {
      id: 2,
      position: "Magang Pengadilan Agama Purwokerto",
      company: "Digital Innovation Corp",
      period: "2020 - 2022",
      description: [
        "Mengembangkan aplikasi web progressive (PWA) untuk sistem manajemen inventori",
        "Berkolaborasi dengan tim UI/UX untuk mengimplementasikan design system yang konsisten",
        "Mengintegrasikan payment gateway dan sistem notifikasi real-time",
        "Melakukan testing otomatis dan deployment menggunakan CI/CD pipeline"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pengalaman Kerja
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perjalanan karir saya dalam dunia pengembangan web dan teknologi
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className="ml-20 bg-white rounded-xl shadow-lg p-8 w-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      {/* <p className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </p> */}
                    </div>
                    {/* <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-500 font-medium">{exp.period}</p>
                    </div> */}
                  </div>

                  {/* <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1 text-sm">▸</span>
                        {desc}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
