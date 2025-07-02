
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Halo, Saya
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Anteng Septiana Dewi
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Seorang mahasiswa aktif di STMIK Widya Utama Purwokerto jurusan Teknik Informatika. Saya memiliki latar belakang pendidikan di bidang Otomatisasi Tata Kelola Perkantoran dan sedang mengembangkan minat serta keahlian di bidang data analyst.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              <Link to="/portfolio" className="flex items-center gap-2">
                Lihat Portofolio <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
