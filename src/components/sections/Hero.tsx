import { Button } from "@/components/ui/button";
import heroImage from "@/assets/chapada-hero.jpg";
import trsLogo from "@/assets/trs-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Logo TRS */}
          <div className="flex justify-center mb-8">
            <img 
              src={trsLogo} 
              alt="Trail Racing Series - TRS Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-hero leading-tight bg-gradient-hero bg-clip-text text-transparent">
            Deixe a Rotina para Trás e Transforme Sua Vida na Tribo Mais Selvagem do Brasil!
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium">
              Participe da <span className="text-accent font-bold">TRS Chapada Diamantina 2025</span>: A liga oficial de trail running que te leva além dos seus limites, conectando você à natureza e a uma comunidade de campeões.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-lg font-semibold text-accent">
            <span className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              3 Distâncias
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">⛰️</span>
              Cenários Cinematográficos  
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Experiência Transformadora
            </span>
          </div>
          
          <div className="bg-gradient-mountain/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
            <p className="text-2xl md:text-3xl font-bold text-accent mb-4">
              18 de Outubro de 2025
            </p>
            <p className="text-xl text-foreground/80 mb-6">
              Você está pronto para a sua maior aventura de corrida?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-xl px-8 py-6"
                onClick={() => window.open('https://forms.gle/ES6vA3dJzLuHQ5kEA', '_blank')}
              >
                GARANTIR MINHA VAGA
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-8 py-6 border-accent/40 hover:bg-accent/10"
                onClick={() => window.open('https://forms.gle/ES6vA3dJzLuHQ5kEA', '_blank')}
              >
                FAZER INSCRIÇÃO
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};