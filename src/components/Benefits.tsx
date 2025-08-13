import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wifi, Lock, TrendingUp } from "lucide-react";

const Benefits = () => {
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
        <div className="text-center mb-16 animate-fade-in">
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
            <Card 
              key={index}
              className="group text-center hover:shadow-tech transition-all duration-300 hover:-translate-y-2 border-0 shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <benefit.icon size={40} className="text-primary group-hover:text-white" />
                </div>

                {/* Stats */}
                <div className="text-2xl font-bold text-primary mb-3">
                  {benefit.stats}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-lg font-semibold mb-2">Anos de Mercado</div>
            <div className="text-muted-foreground">Experiência consolidada em soluções corporativas</div>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-lg font-semibold mb-2">Empresas Atendidas</div>
            <div className="text-muted-foreground">Clientes satisfeitos em diversos setores</div>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-lg font-semibold mb-2">Suporte Técnico</div>
            <div className="text-muted-foreground">Atendimento disponível sempre que precisar</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;