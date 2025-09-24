import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const OfferSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section text-background mb-8">
            Seu Passaporte para a Transformação na Chapada Diamantina 2025 Está Aqui!
          </h2>
          
          <Card className="bg-background/95 backdrop-blur-sm border-0 shadow-mountain">
            <CardContent className="p-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-muted-foreground text-2xl line-through">
                      De R$ 390
                    </span>
                    <span className="text-accent text-lg">
                      (valor do 3º lote para 21km)
                    </span>
                  </div>
                  
                  <p className="text-xl text-foreground/80">
                    por um <span className="text-primary font-bold">investimento transformador</span> que caberá no seu bolso
                  </p>
                </div>
                
                <div className="bg-gradient-mountain/20 rounded-xl p-8 border border-accent/20">
                  <h3 className="text-xl font-bold text-accent mb-4">
                    💡 Exemplo de Economia Real:
                  </h3>
                  <p className="text-lg text-foreground/90 mb-4">
                    Garanta sua vaga na categoria 21km por apenas
                  </p>
                  <div className="text-3xl font-bold text-primary mb-2">
                    R$ 292,50
                  </div>
                  <p className="text-foreground/70">
                    (após 25% de desconto para moradores)
                  </p>
                  <p className="text-sm text-accent mt-2">
                    ou até menos com outros bônus!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-foreground/80">
                    Seus descontos especiais podem ser aplicados <span className="text-accent font-bold">SOBRE QUALQUER LOTE</span>, tornando esta oportunidade ainda mais imperdível.
                  </p>
                  
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <p className="text-destructive font-bold">
                      ⚠️ Não perca tempo, o preço sobe a cada lote e as vagas estão acabando!
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button variant="hero" size="lg" className="text-xl px-12 py-6">
                    QUERO GARANTIR MINHA VAGA AGORA!
                  </Button>
                  <Button variant="outline" size="lg" className="text-xl px-8 py-6 border-accent/40">
                    VER TODAS AS CATEGORIAS
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};