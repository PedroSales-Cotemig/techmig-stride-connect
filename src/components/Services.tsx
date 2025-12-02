import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Wrench, Network, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "@/hooks/useInView";

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Monitor,
      title: "Workstations Personalizadas",
      description: "Desenvolvimento e implementação de estações de trabalho sob medida para maximizar a produtividade da sua equipe.",
      features: ["Configuração otimizada", "Hardware de alta performance", "Suporte técnico incluído"]
    },
    {
      icon: Wrench,
      title: "Manutenção de Computadores",
      description: "Serviços preventivos e corretivos para manter seus equipamentos sempre funcionando com máxima eficiência.",
      features: ["Manutenção preventiva", "Diagnóstico avançado", "Reparos especializados"]
    },
    {
      icon: Network,
      title: "Infraestrutura de Redes",
      description: "Projeto e implementação de redes cabeadas e sem fio para garantir conectividade confiável e segura.",
      features: ["Redes cabeadas", "Wi-Fi empresarial", "Configuração avançada"]
    },
    {
      icon: Shield,
      title: "Sistemas CFTV",
      description: "Instalação e monitoramento de sistemas de segurança para proteger seu ambiente corporativo 24 horas por dia.",
      features: ["Câmeras HD/4K", "Monitoramento remoto", "Gravação em nuvem"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para empresas que buscam 
            excelência, segurança e produtividade em seus ambientes de trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
              duration={600}
            >
              <Card className="group h-full hover:shadow-tech transition-all duration-500 hover:-translate-y-3 border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <service.icon size={32} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Precisa de uma solução personalizada? Entre em contato conosco.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-button hover:opacity-90 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Falar com Especialista</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
