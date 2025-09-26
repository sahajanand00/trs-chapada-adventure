import muquinhoPhoto from "@/assets/muquinho-photo.jpg";

export const ExpertSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-accent mb-4">
              Conheça o Mentor Por Trás da Revolução
            </h2>
            <p className="text-xl text-primary font-bold">
              Muquinho, O Arquiteto da Sua Jornada na Chapada!
            </p>
          </div>
          
          <Card className="bg-gradient-mountain border-accent/20 shadow-mountain">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto lg:mx-0 flex items-center justify-center overflow-hidden">
                    <img 
                       src={muquinhoPhoto} 
                      alt="Carlos Cesar Faria Ferreira Junior - Muquinho" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-accent mb-2">
                      Carlos Cesar Faria Ferreira Junior
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-4">
                      "Muquinho"
                    </p>
                    
                    <div className="space-y-3 text-foreground/80">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-bold">🎓</span>
                        <span>Formado em Educação Física</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-bold">🏢</span>
                        <span>Funcionário Público</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-bold">🌿</span>
                        <span>Fundador do Vale do Capão Ecoadventure</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-bold">🏆</span>
                        <span>Revelou 2 Campeões Mundiais</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    Com <span className="text-accent font-bold">8 anos de dedicação</span> formando atletas e transformando vidas no Vale do Capão, Muquinho é a força motriz da TRS Chapada Diamantina.
                  </p>
                  
                  <p className="text-foreground/90 leading-relaxed">
                    Sua autoridade se solidifica em ter <span className="text-primary font-bold">revelado 2 campeões mundiais</span> e em sua profunda conexão com a comunidade e a natureza local.
                  </p>
                  
                  <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
                    <p className="text-foreground/90 italic leading-relaxed">
                      "Ele não é apenas um organizador, é um <span className="text-accent font-bold">visionário</span> que entende a alma do trail running e a potência da Chapada para te impulsionar."
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