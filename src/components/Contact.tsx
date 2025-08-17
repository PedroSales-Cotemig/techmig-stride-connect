import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const handleFormRedirect = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdQKdyHTwStECSMrKfOSfKwRDRpPdVUvdUGkc5aSnIGlTUkhQ/viewform?usp=dialog', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Pronto para <span className="text-primary">revolucionar</span> sua empresa?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Transforme sua infraestrutura tecnológica com nossa expertise especializada. 
            Receba uma consultoria personalizada e descubra como podemos impulsionar 
            o crescimento do seu negócio.
          </p>

          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4 text-lg font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Consultoria gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Resposta em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
            </div>

            <Button 
              onClick={handleFormRedirect}
              size="lg"
              className="gradient-primary text-white px-12 py-6 text-xl font-semibold shadow-tech hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Consultoria Gratuita
              <ArrowRight size={24} className="ml-3" />
            </Button>

            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já confiam na Techmig para 
              suas soluções tecnológicas. Preencha nosso formulário e receba 
              uma proposta personalizada para suas necessidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;