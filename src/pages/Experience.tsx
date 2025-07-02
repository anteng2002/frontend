
const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Senior Full-Stack Developer",
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
      position: "Full-Stack Developer",
      company: "Digital Innovation Corp",
      period: "2020 - 2022",
      description: [
        "Mengembangkan aplikasi web progressive (PWA) untuk sistem manajemen inventori",
        "Berkolaborasi dengan tim UI/UX untuk mengimplementasikan design system yang konsisten",
        "Mengintegrasikan payment gateway dan sistem notifikasi real-time",
        "Melakukan testing otomatis dan deployment menggunakan CI/CD pipeline"
      ]
    },
    {
      id: 3,
      position: "Junior Web Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: [
        "Mengembangkan website company profile dan landing page untuk berbagai klien",
        "Belajar dan mengimplementasikan responsive design dan SEO best practices",
        "Berpartisipasi dalam agile development process dan daily standup meetings",
        "Melakukan maintenance dan bug fixing untuk aplikasi web yang sudah ada"
      ]
    },
    {
      id: 4,
      position: "Web Development Intern",
      company: "Creative Agency XYZ",
      period: "2018 - 2019",
      description: [
        "Membantu dalam pengembangan website portfolio untuk klien kreatif",
        "Mempelajari dasar-dasar web development dan version control menggunakan Git",
        "Membantu dalam testing website di berbagai browser dan device",
        "Berkontribusi dalam brainstorming session untuk user experience improvement"
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
                      <p className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-500 font-medium">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1 text-sm">▸</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mari Berkolaborasi!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Dengan pengalaman yang saya miliki, saya siap membantu mewujudkan proyek digital 
            Anda dari konsep hingga implementasi. Mari diskusikan bagaimana saya dapat 
            berkontribusi untuk kesuksesan proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Hubungi Saya
            </a>
            <a 
              href="/portfolio" 
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Lihat Portofolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
