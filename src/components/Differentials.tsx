import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Award, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "@/hooks/useInView";

const Differentials = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });

  const differentials = [
    "Consultoria personalizada para cada projeto",
    "Equipe certificada e altamente qualificada",
    "Garantia estendida em todos os serviços",
    "Suporte técnico 24/7 sem custo adicional",
    "Atualização tecnológica constante",
    "Parcerias com principais fabricantes"
  ];

  const highlights = [
    {
      icon: Award,
      title: "Certificações",
      description: "Técnicos certificados pelas principais marcas do mercado"
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada projeto executado"
    },
    {
      icon: Users,
      title: "Relacionamento",
      description: "Parceria de longo prazo focada no sucesso do cliente"
    }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que nos torna únicos no mercado e a escolha preferida de empresas 
            que buscam excelência em soluções tecnológicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Differentials List */}
          <AnimatedSection animation="slide-left" duration={700}>
            <div className="space-y-4">
              {differentials.map((differential, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 80}
                  duration={500}
                >
                  <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-background/80 transition-all duration-300 group cursor-default">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-lg text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                      {differential}
                    </span>
                  </div>
                </AnimatedSection>
              ))}

              <AnimatedSection animation="fade-up" delay={500} className="pt-8">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-button hover:opacity-90 hover:scale-105 transition-all duration-300"
                >
                  Descubra Como Podemos Ajudar
                </button>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <AnimatedSection
                key={index}
                animation="slide-right"
                delay={index * 150}
                duration={600}
              >
                <Card className="group hover:shadow-tech transition-all duration-500 hover:-translate-y-1 border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                        <highlight.icon size={32} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" delay={200} className="mt-16">
          <div className="text-center p-8 bg-background rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para transformar sua infraestrutura?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções podem 
              impulsionar a produtividade e segurança da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-button hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                Solicitar Consultoria Gratuita
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                Ver Todos os Serviços
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Differentials;
