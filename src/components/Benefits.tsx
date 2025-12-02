import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wifi, Lock, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const Benefits = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  
  const yearsCount = useCountUp({ end: 10, duration: 2000, delay: 200 });
  const companiesCount = useCountUp({ end: 200, duration: 2500, delay: 400 });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Otimização de Espaço",
      description: "Maximizamos a eficiência do seu ambiente de trabalho com soluções inteligentes de organização e layout tecnológico.",
      stats: "40% mais produtividade"
    },
    {
      icon: Wifi,
      title: "Conectividade Avançada",
      description: "Infraestrutura de rede robusta e confiável que garante conexão estável para todas as operações da sua empresa.",
      stats: "99.9% de uptime"
    },
    {
      icon: Lock,
      title: "Segurança Intransigente",
      description: "Sistemas de monitoramento e proteção que mantêm seus dados, equipamentos e ambiente corporativo totalmente seguros.",
      stats: "Proteção 24/7"
    },
    {
      icon: Zap,
      title: "Performance Excepcional",
      description: "Equipamentos e configurações otimizadas para entregar o máximo desempenho em todas as tarefas do seu negócio.",
      stats: "3x mais velocidade"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="text-primary">Techmig</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entregamos resultados mensuráveis que transformam a operação da sua empresa 
            através de tecnologia de ponta e expertise comprovada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
              duration={600}
            >
              <Card className="group text-center h-full hover:shadow-tech transition-all duration-500 hover:-translate-y-3 border-0 shadow-card">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <benefit.icon size={40} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>

                  {/* Stats */}
                  <div className="text-2xl font-bold text-primary mb-3 group-hover:scale-105 transition-transform duration-300">
                    {benefit.stats}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Benefits */}
        <div ref={yearsCount.elementRef} className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { value: yearsCount.count, suffix: '+', label: 'Anos de Mercado', desc: 'Experiência consolidada em soluções corporativas' },
            { value: companiesCount.count, suffix: '+', label: 'Empresas Atendidas', desc: 'Clientes satisfeitos em diversos setores' },
            { value: '24/7', suffix: '', label: 'Suporte Técnico', desc: 'Atendimento disponível sempre que precisar', isStatic: true }
          ].map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 150}
              duration={500}
              className="text-center p-6 group"
            >
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.isStatic ? stat.value : `${stat.value}${stat.suffix}`}
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-muted-foreground">{stat.desc}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
