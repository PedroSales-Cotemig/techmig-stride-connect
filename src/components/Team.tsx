import { Card, CardContent } from "@/components/ui/card";
import teamPhoto from "@/assets/team-photo.jpg";
import { LinkedinIcon, MailIcon } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "Diretor Técnico",
      experience: "15+ anos",
      expertise: "Infraestrutura de Redes",
      description: "Especialista em soluções corporativas complexas"
    },
    {
      name: "Ana Santos",
      role: "Gerente de Projetos",
      experience: "12+ anos",
      expertise: "Gestão de TI",
      description: "Focada em resultados e satisfação do cliente"
    },
    {
      name: "Roberto Lima",
      role: "Técnico Senior",
      experience: "10+ anos",
      expertise: "Sistemas CFTV",
      description: "Expert em segurança e monitoramento"
    },
    {
      name: "Marina Costa",
      role: "Especialista em Hardware",
      experience: "8+ anos",
      expertise: "Workstations",
      description: "Configurações otimizadas para alta performance"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profissionais experientes e certificados, comprometidos em entregar 
            soluções tecnológicas de excelência para sua empresa.
          </p>
        </div>

        {/* Team Photo */}
        <div className="relative mb-16 animate-slide-up">
          <div className="relative overflow-hidden rounded-2xl shadow-tech max-w-4xl mx-auto">
            <img 
              src={teamPhoto} 
              alt="Equipe técnica da Techmig"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            
            {/* Overlay content */}
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Equipe Techmig</h3>
              <p className="text-lg opacity-90">Especialistas em tecnologia corporativa</p>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group text-center hover:shadow-tech transition-all duration-300 hover:-translate-y-2 border-0 shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                
                <div className="text-primary font-medium mb-2">
                  {member.role}
                </div>
                
                <div className="text-sm text-muted-foreground mb-3">
                  {member.experience} • {member.expertise}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <LinkedinIcon size={18} />
                  </button>
                  <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <MailIcon size={18} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-lg font-semibold mb-2">Certificações</div>
            <div className="text-muted-foreground text-sm">Técnicos qualificados</div>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-lg font-semibold mb-2">Dedicação</div>
            <div className="text-muted-foreground text-sm">Foco no resultado</div>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-lg font-semibold mb-2">Suporte</div>
            <div className="text-muted-foreground text-sm">Sempre disponível</div>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-lg font-semibold mb-2">Anos</div>
            <div className="text-muted-foreground text-sm">Experiência média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;