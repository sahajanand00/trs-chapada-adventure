import { Card, CardContent } from "@/components/ui/card";

export const SocialProofSection = () => {
  const proofs = [
    {
      icon: "🌟",
      title: "Revelamos Talentos Mundiais",
      description: "Yure Nonato (16) e Judah Vinícius (18) já representam o Brasil no Mundial de Skyrunning 2025! Eles cresceram conosco, e agora o mundo é o palco deles. Assim como João Pedro Silva, campeão Brasileiro Sub-23, que se desenvolveu na nossa metodologia. A TRS não é só uma corrida, é um trampolim para o pódio global!"
    },
    {
      icon: "💥",
      title: "Comunidade que Transforma",
      description: "Mais de 500 famílias impactadas positivamente! A TRS não só desenvolve atletas, mas fortalece a economia local, gera empregos e cria um senso de pertencimento único. Junte-se a um movimento que vai além da linha de chegada."
    },
    {
      icon: "🏆",
      title: "Oito Anos de Evolução e Reconhecimento",
      description: "Desde 2017, a TRS tem crescido, se consolidado e se tornado a ÚNICA liga oficial com chancela da Federação Baiana de Atletismo na região. A categoria 21km vale pontos no ranking estadual, provando que aqui, sua performance tem valor oficial."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-accent mb-4">
              Não acredite apenas na nossa palavra
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Veja o impacto <span className="text-primary font-bold">REAL</span> que a TRS Chapada Diamantina já causou e as histórias de superação que nasceram aqui. Prepare-se para se inspirar!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {proofs.map((proof, index) => (
              <Card key={index} className="bg-gradient-mountain border-accent/20 hover:shadow-mountain transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-5xl mb-6">{proof.icon}</div>
                    <h3 className="text-xl font-bold text-accent mb-4">
                      {proof.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {proof.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};