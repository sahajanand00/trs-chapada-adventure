import { Card, CardContent } from "@/components/ui/card";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-mountain/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-section text-accent mb-4">
              Seu Compromisso é com a Aventura, Nosso com a Organização Impecável
            </h2>
          </div>
          
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20">
            <CardContent className="p-10">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Entendemos que no mundo dos eventos esportivos, imprevistos acontecem. Por isso, a TRS Chapada Diamantina segue a <span className="text-accent font-semibold">política padrão de eventos oficiais</span>: não oferecemos garantia ou reembolso para inscrições, conforme nosso regulamento oficial.
                  </p>
                  
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Sua inscrição garante seu lugar neste <span className="text-primary font-bold">evento único</span> e transforma a comunidade.
                  </p>
                  
                  <div className="bg-nature/10 border border-nature/30 rounded-lg p-6 mt-6">
                    <p className="text-nature font-semibold text-lg">
                      ✅ Esteja certo de que faremos o nosso máximo para entregar uma experiência inesquecível e segura para todos os participantes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};