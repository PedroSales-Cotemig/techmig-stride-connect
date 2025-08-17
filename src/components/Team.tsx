import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, MailIcon } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Enzo Costa",
      role: "CEO",
      experience: "15+ anos",
      expertise: "Liderança Estratégica",
      description: "Visionário e estrategista corporativo"
    },
    {
      name: "Pedro Sales",
      role: "TI Manager",
      experience: "12+ anos",
      expertise: "Gestão de TI",
      description: "Especialista em infraestrutura tecnológica"
    },
    {
      name: "Samuel Salatiel",
      role: "Gestor de Comunicação",
      experience: "8+ anos",
      expertise: "Marketing Digital",
      description: "Expert em comunicação corporativa"
    },
    {
      name: "Lucas Irineu",
      role: "Desenvolvedor de Projetos",
      experience: "10+ anos",
      expertise: "Desenvolvimento",
      description: "Focado em soluções inovadoras"
    },
    {
      name: "Walmig",
      role: "AI Manager",
      experience: "6+ anos",
      expertise: "Inteligência Artificial",
      description: "Especialista em automação inteligente"
    },
    {
      name: "Gustavo Dultra",
      role: "Gestor de Estoque",
      experience: "9+ anos",
      expertise: "Logística",
      description: "Otimização de recursos e materiais"
    },
    {
      name: "Eduardo Leite",
      role: "Chefe Administrativo",
      experience: "11+ anos",
      expertise: "Administração",
      description: "Gestão administrativa e financeira"
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

        {/* Team Members Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group text-center hover:shadow-tech transition-all duration-300 hover:-translate-y-2 border-0 shadow-card animate-slide-up w-72"
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
      </div>
    </section>
  );
};

export default Team;