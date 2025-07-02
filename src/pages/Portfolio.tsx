
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {getProjects, createProject, updateProject, deleteProject} from '../api/projects';

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [dataProjects, setDataProjects] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: ""
  });

  // Load initial projects
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await getProjects();
        setDataProjects(response);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    loadProjects();
    const initialProjects: Project[] = [
      {
        _id: "1",
        title: "E-Commerce Website",
        description: "Platform e-commerce modern dengan fitur lengkap termasuk sistem pembayaran, manajemen produk, dan dashboard admin yang user-friendly.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
      },
      {
        _id: "2",
        title: "Mobile Banking App",
        description: "Aplikasi mobile banking dengan UI/UX yang intuitif, keamanan tinggi, dan fitur transfer yang mudah digunakan untuk semua kalangan.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
      },
      {
        _id: "3",
        title: "Task Management System",
        description: "Sistem manajemen tugas untuk tim dengan fitur kolaborasi real-time, tracking progress, dan laporan produktivitas yang detail.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
      }
    ];
    setProjects(initialProjects);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject?._id) {
      // Update existing project
      // setProjects(projects.map(p => 
      //   p.id === editingProject.id 
      //     ? { ...formData, id: editingProject.id }
      //     : p
      // ));
      await updateProject(editingProject._id, {title: formData.title, description: formData.description});
      const response = await getProjects();
      setDataProjects(response);
      toast({
        title: "Berhasil!",
        description: "Proyek berhasil diperbarui.",
      });
    } else {
      await createProject({title: formData.title, description: formData.description});
      const response = await getProjects();
      setDataProjects(response);
      toast({
        title: "Berhasil!",
        description: "Proyek baru berhasil ditambahkan.",
      });
    }
    
    resetForm();
  };

  const handleEdit = async (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    console.log(id)
    await deleteProject(id);
    const response = await getProjects();
    setDataProjects(response);
    toast({
      title: "Terhapus!",
      description: "Proyek berhasil dihapus.",
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      imageUrl: ""
    });
    setEditingProject(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portofolio Proyek
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Kumpulan proyek yang telah saya kerjakan dengan berbagai teknologi modern
          </p>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus size={20} className="mr-2" />
                Tambah Proyek
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {editingProject ? 'Edit Proyek' : 'Tambah Proyek Baru'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Judul Proyek"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Deskripsi Proyek"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
                {/* <Input
                  placeholder="URL Gambar (opsional)"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                /> */}
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    {editingProject ? 'Perbarui' : 'Tambah'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Batal
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataProjects.map((project) => (
            <Card key={project._id} className="group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="opacity-90"
                    onClick={() => handleEdit(project)}
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="opacity-90"
                    onClick={() => handleDelete(project._id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle>
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
