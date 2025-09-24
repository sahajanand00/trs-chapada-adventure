import { DiscountCard } from "@/components/DiscountCard";

export const BonusSection = () => {
  const bonuses = [
    {
      icon: "✅",
      title: "RESIDENTES DA CHAPADA DIAMANTINA",
      description: "Se você vive e respira a Chapada, essa condição é para você! Mostre seu comprovante de residência e garanta um desconto especial na sua inscrição.",
      discount: "25% OFF"
    },
    {
      icon: "⚡",
      title: "BRIGADISTAS VOLUNTÁRIOS",
      description: "Nossa gratidão aos heróis que cuidam das trilhas! Brigadistas voluntários têm um desconto ainda maior para participar da TRS.",
      discount: "30% OFF"
    },
    {
      icon: "🤝",
      title: "DESCONTO PARA GRUPOS",
      description: "Correr em equipe é mais forte! Reúna seus amigos, junte um grupo de 10 ou mais corredores e todos ganham desconto na inscrição.",
      discount: "15% OFF para 10+ atletas"
    },
    {
      icon: "🌟",
      title: "MAIOR IDADE",
      description: "A experiência não tem idade! Atletas com 60 anos ou mais ganham um desconto especial para celebrar a vitalidade no esporte.",
      discount: "50% OFF para 60+ anos"
    },
    {
      icon: "♿",
      title: "PESSOAS COM DEFICIÊNCIA (PCD)",
      description: "Acreditamos na inclusão e no poder transformador do esporte para todos. Pessoas com Deficiência (PCD) têm desconto garantido.",
      discount: "50% OFF"
    }
  ];

  return (
    <section className="py-20 bg-gradient-sunrise">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-accent mb-8">
              Descontos Especiais que Fazem a Diferença
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <DiscountCard
                key={index}
                icon={bonus.icon}
                title={bonus.title}
                description={bonus.description}
                discount={bonus.discount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};