import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flag, Trophy, Award } from "lucide-react";

export const DistanceSection = () => {
  const distances = [
    {
      distance: "7KM",
      level: "INICIANTE",
      price: "R$ 260,00",
      description: "Perfeito para começar sua jornada",
      icon: Flag,
      highlight: false,
      buttonText: "COMEÇAR AQUI"
    },
    {
      distance: "14KM", 
      level: "INTERMEDIÁRIO",
      price: "R$ 290,00",
      description: "Desafio equilibrado para experientes",
      icon: Trophy,
      highlight: false,
      buttonText: "ACEITAR DESAFIO"
    },
    {
      distance: "21KM",
      level: "AVANÇADO", 
      price: "R$ 330,00",
      description: "Liga oficial FBA - pontua no ranking!",
      icon: Award,
      highlight: true,
      buttonText: "QUERO SER CAMPEÃO"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-accent mb-4">
              ESCOLHA SUA DISTÂNCIA
            </h2>
            <p className="text-xl text-foreground/80">
              Encontre o desafio perfeito para o seu nível
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {distances.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-gradient-mountain border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-mountain ${
                    item.highlight 
                      ? 'border-primary shadow-glow' 
                      : 'border-accent/20 hover:border-accent/40'
                  }`}
                >
                  <CardContent className="p-8 text-center">
                    {item.highlight && (
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                        🏆 LIGA OFICIAL
                      </div>
                    )}
                    
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                      item.highlight ? 'bg-primary/20' : 'bg-accent/20'
                    }`}>
                      <IconComponent 
                        size={32} 
                        className={item.highlight ? 'text-primary' : 'text-accent'} 
                      />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-accent mb-2">
                      {item.distance}
                    </h3>
                    
                    <p className={`text-lg font-semibold mb-4 ${
                      item.highlight ? 'text-primary' : 'text-accent'
                    }`}>
                      {item.level}
                    </p>
                    
                    <div className="text-3xl font-bold text-destructive mb-4">
                      {item.price}
                    </div>
                    
                    <p className="text-foreground/80 mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <Button 
                      variant={item.highlight ? "hero" : "action"} 
                      size="lg" 
                      className="w-full text-lg font-bold"
                      onClick={() => window.open('https://forms.gle/ES6vA3dJzLuHQ5kEA', '_blank')}
                    >
                      {item.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};