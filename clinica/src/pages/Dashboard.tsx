import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/components/api/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, Calendar, FileText, User } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NavBar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';

interface Exame {
  id: number;
  name: string;
  date: string;
  doctor: string;
  pdfUrl: string;
}

const ExameAccordionItem = ({ exame }: { exame: Exame }) => (
  <AccordionItem value={exame.id.toString()} className=" border-blue-100">
    <AccordionTrigger className="hover:bg-blue-50/50 px-4 py-2 rounded-lg">
      <div className="flex items-center space-x-4 w-full p-2">
        <div className="p-2 bg-blue-100 rounded-lg">
          <FileText className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-lg">{exame.name}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(exame.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {exame.doctor}
            </div>
          </div>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="p-4 bg-white rounded-lg mt-2">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Visualizar Exame</h4>
          <div className="w-full h-[700px] rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src={exame.pdfUrl}
              className="w-full h-full"
              title={`PDF do Exame ${exame.name}`}
            />
          </div>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default function Dashboard() {
  const [exames] = React.useState<Exame[]>([
    { id: 1, name: 'Exame de Sangue', date: '2024-10-01', doctor: 'Dr. Silva', pdfUrl: '../src/assets/resultado.pdf' },
    { id: 2, name: 'Exame de Urina', date: '2024-10-10', doctor: 'Dra. Santos', pdfUrl: '../src/assets/resultado.pdf' },
    { id: 3, name: 'Raio-X do Tórax', date: '2024-10-15', doctor: 'Dr. Costa', pdfUrl: '../src/assets/resultado.pdf' }
  ]);

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
    <NavBar />
    <MobileNav links={[{href: "/", label: "Voltar"}]} />
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Perfil do Usuário */}
          <Card className="lg:col-span-3 bg-white/50 backdrop-blur">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Bem-vindo, {user.username}</h1>
                  <p className="text-gray-500">Seus exames estão disponíveis abaixo</p>
                </div>
              </div>
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
              </div>
            </CardContent>
          </Card>

          {/* Lista de Exames */}
          <div className="lg:col-span-2">
            <Card className="bg-white/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Seus Exames Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[60vh]">
                  <Accordion type="single" collapsible className="space-y-4">
                    {exames.map((exame) => (
                      <ExameAccordionItem key={exame.id} exame={exame} />
                    ))}
                  </Accordion>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Resumo/Estatísticas */}
          <Card className="bg-white/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Resumo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-500">Total de Exames</div>
                  <div className="text-2xl font-bold">{exames.length}</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-500">Último Exame</div>
                  <div className="text-2xl font-bold">
                    {new Date(exames[exames.length - 1].date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}