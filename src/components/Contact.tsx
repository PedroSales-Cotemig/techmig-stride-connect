import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "@/hooks/useInView";

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const handleFormRedirect = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdQKdyHTwStECSMrKfOSfKwRDRpPdVUvdUGkc5aSnIGlTUkhQ/viewform?usp=dialog', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Pronto para{" "}
            <span className="text-primary relative inline-block">
              revolucionar
              <span className={`absolute -bottom-2 left-0 h-1 bg-primary/30 rounded-full transition-all duration-1000 delay-500 ${
                isInView ? 'w-full' : 'w-0'
              }`} />
            </span>{" "}
            sua empresa?
          </h2>
          
          <p 
            className={`text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Transforme sua infraestrutura tecnológica com nossa expertise especializada. 
            Receba uma consultoria personalizada e descubra como podemos impulsionar 
            o crescimento do seu negócio.
          </p>

          <div className="space-y-6">
            <div 
              className={`flex flex-wrap justify-center gap-4 text-lg font-medium text-muted-foreground transition-all duration-700 delay-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                'Consultoria gratuita',
                'Resposta em 24h',
                'Sem compromisso'
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 group"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="group-hover:text-foreground transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>

            <AnimatedSection animation="scale" delay={500}>
              <Button 
                onClick={handleFormRedirect}
                size="lg"
                className="gradient-primary text-primary-foreground px-12 py-6 text-xl font-semibold shadow-tech hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Solicitar Consultoria Gratuita
                  <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </AnimatedSection>

            <p 
              className={`text-sm text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-600 ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
            >
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
