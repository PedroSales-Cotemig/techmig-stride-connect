import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em até 24 horas.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(31) 3333-4444",
      description: "Atendimento comercial"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@techmig.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Tech, 1234 - Belo Horizonte/MG",
      description: "Visite nosso escritório"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 8h às 18h",
      description: "Suporte 24/7 disponível"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contrate o nosso <span className="text-primary">serviço!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua infraestrutura tecnológica? Entre em contato 
            conosco e receba uma consultoria personalizada gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-tech animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Solicite seu orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="border-input focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="border-input focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="border-input focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(31) 99999-9999"
                      required
                      className="border-input focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Serviço de interesse</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="workstations">Workstations Personalizadas</option>
                    <option value="manutencao">Manutenção de Computadores</option>
                    <option value="redes">Infraestrutura de Redes</option>
                    <option value="cftv">Sistemas CFTV</option>
                    <option value="consultoria">Consultoria Geral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva suas necessidades ou dúvidas..."
                    rows={4}
                    className="border-input focus:border-primary focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-white py-6 text-lg font-semibold shadow-button hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Enviar Solicitação
                    </>
                  )}
                </Button>

                <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Resposta garantida em até 24 horas. Seus dados estão seguros conosco.
                  </span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para atender suas necessidades tecnológicas. 
                Escolha a forma de contato que preferir.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <info.icon size={24} className="text-primary group-hover:text-white" />
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <div className="text-foreground font-medium mb-1">
                          {info.content}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {info.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="gradient-primary text-white border-0 shadow-tech">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold mb-4">Atendimento Prioritário</h4>
                <p className="mb-6 opacity-90">
                  Precisa de suporte urgente? Nosso atendimento especializado está 
                  disponível 24/7 para clientes corporativos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <Phone size={18} className="mr-2" />
                    Ligar Agora
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Mail size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;