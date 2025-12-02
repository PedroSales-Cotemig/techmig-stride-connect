import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  
  const satisfactionCount = useCountUp({ end: 98, duration: 2000, delay: 200 });
  const projectsCount = useCountUp({ end: 200, duration: 2500, delay: 400 });

  const testimonials = [
    {
      name: "João Ferreira",
      company: "TechCorp Solutions",
      role: "CEO",
      rating: 5,
      text: "A Techmig transformou completamente nossa infraestrutura. Antes tínhamos problemas constantes de conectividade, agora tudo funciona perfeitamente. Equipe muito profissional e atendimento excepcional.",
      result: "Aumento de 40% na produtividade"
    },
    {
      name: "Maria Santos",
      company: "Inovação Digital Ltda",
      role: "Diretora de TI",
      rating: 5,
      text: "Contratamos a Techmig para implementar nosso sistema de CFTV e ficamos impressionados com a qualidade do serviço. Instalação impecável e suporte técnico sempre disponível quando precisamos.",
      result: "100% de segurança garantida"
    },
    {
      name: "Carlos Oliveira",
      company: "Escritório Advocacia & Associados",
      role: "Sócio Fundador",
      rating: 5,
      text: "As workstations personalizadas aumentaram significativamente nossa eficiência. A equipe da Techmig entendeu exatamente nossas necessidades e entregou uma solução sob medida perfeita.",
      result: "Redução de 60% no tempo de processos"
    },
    {
      name: "Ana Costa",
      company: "Clínica MedCenter",
      role: "Administradora",
      rating: 5,
      text: "Precisávamos de uma infraestrutura de rede confiável para nossos sistemas médicos. A Techmig entregou uma solução robusta que nunca falha. Recomendo sem hesitação.",
      result: "Zero falhas em 2 anos"
    }
  ];

  const changeTestimonial = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 300);
    }, 200);
  };

  const nextTestimonial = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    changeTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    changeTestimonial(newIndex);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de empresas que transformaram sua infraestrutura 
            tecnológica com nossas soluções especializadas.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <AnimatedSection animation="fade-up" className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-tech overflow-hidden">
            <CardContent className="p-12">
              <div 
                className={`text-center transition-all duration-300 ${
                  isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote size={32} className="text-primary" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6 gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={24} 
                      className="text-yellow-400 fill-current"
                      style={{ 
                        animation: `scaleIn 0.3s ease-out ${i * 0.1}s both`
                      }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Result Highlight */}
                <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold mb-8">
                  {testimonials[currentIndex].result}
                </div>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="text-xl font-semibold">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => changeTestimonial(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 w-3 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <div ref={satisfactionCount.elementRef} className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: satisfactionCount.count, suffix: '%', label: 'Satisfação', desc: 'Clientes satisfeitos com nossos serviços' },
            { value: projectsCount.count, suffix: '+', label: 'Projetos', desc: 'Implementações bem-sucedidas' },
            { value: '5', suffix: '★', label: 'Avaliação', desc: 'Média nas plataformas de avaliação', isStatic: true }
          ].map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 150}
              duration={500}
              className="p-6 group"
            >
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.isStatic ? `${stat.value}${stat.suffix}` : `${stat.value}${stat.suffix}`}
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-muted-foreground">{stat.desc}</div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={300} className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Junte-se aos nossos clientes satisfeitos
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
            <span className="relative z-10">Solicitar Orçamento Gratuito</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
