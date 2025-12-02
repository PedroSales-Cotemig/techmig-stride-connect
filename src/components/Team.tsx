import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, MailIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const Team = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  
  const certsCount = useCountUp({ end: 50, duration: 2000, delay: 200 });
  const expCount = useCountUp({ end: 10, duration: 2000, delay: 600 });

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
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 80}
                duration={600}
                className="w-72"
              >
                <Card className="group text-center h-full hover:shadow-tech transition-all duration-500 hover:-translate-y-3 border-0 shadow-card">
                  <CardContent className="p-8">
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <span className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors duration-500">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Member Info */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
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
                      <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                        <LinkedinIcon size={18} />
                      </button>
                      <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                        <MailIcon size={18} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Team Stats */}
          <div ref={certsCount.elementRef} className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: certsCount.count, suffix: '+', label: 'Certificações', desc: 'Técnicos qualificados' },
              { value: '100', suffix: '%', label: 'Dedicação', desc: 'Foco no resultado', isStatic: true },
              { value: '24', suffix: 'h', label: 'Suporte', desc: 'Sempre disponível', isStatic: true },
              { value: expCount.count, suffix: '+', label: 'Anos', desc: 'Experiência média' }
            ].map((stat, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 100}
                duration={500}
                className="p-6 group"
              >
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.isStatic ? `${stat.value}${stat.suffix}` : `${stat.value}${stat.suffix}`}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.desc}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
