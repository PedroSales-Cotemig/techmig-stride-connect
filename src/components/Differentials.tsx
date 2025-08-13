import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Award, Users } from "lucide-react";

const Differentials = () => {
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
        <div className="text-center mb-16 animate-fade-in">
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
          <div className="space-y-6 animate-slide-up">
            {differentials.map((differential, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg text-foreground font-medium">
                  {differential}
                </span>
              </div>
            ))}

            <div className="pt-8">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold shadow-button hover:opacity-90 transition-opacity"
              >
                Descubra Como Podemos Ajudar
              </button>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-1 border-0 shadow-card"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <highlight.icon size={32} className="text-primary group-hover:text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-card animate-fade-in">
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
              className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold shadow-button hover:opacity-90 transition-opacity"
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
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;