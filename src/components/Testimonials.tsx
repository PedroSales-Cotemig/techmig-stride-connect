import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de empresas que transformaram sua infraestrutura 
            tecnológica com nossas soluções especializadas.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-tech animate-slide-up">
            <CardContent className="p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote size={32} className="text-primary" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current" />
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
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center animate-fade-in">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-lg font-semibold mb-2">Satisfação</div>
            <div className="text-muted-foreground">Clientes satisfeitos com nossos serviços</div>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-lg font-semibold mb-2">Projetos</div>
            <div className="text-muted-foreground">Implementações bem-sucedidas</div>
          </div>
          
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">5★</div>
            <div className="text-lg font-semibold mb-2">Avaliação</div>
            <div className="text-muted-foreground">Média nas plataformas de avaliação</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
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
            className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold shadow-button hover:opacity-90 transition-opacity"
          >
            Solicitar Orçamento Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;