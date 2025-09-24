export const ProblemSection = () => {
  const problems = [
    {
      icon: "😤",
      text: "Você se sente frustrado com provas urbanas sem graça, onde a única emoção é o trânsito?"
    },
    {
      icon: "😨",
      text: "Tem medo de se aventurar em trilhas técnicas por achar que não está preparado, que as montanhas são perigosas demais?"
    },
    {
      icon: "🎯",
      text: "Você busca uma corrida que realmente valha a pena, que conte pontos, que te coloque no mapa do trail running oficial?"
    },
    {
      icon: "💫",
      text: "Sua paixão pela corrida parece um hobby sem reconhecimento, e você anseia por um esporte que te eleve e te conecte de verdade com a natureza?"
    }
  ];

  return (
    <section className="py-20 bg-gradient-mountain/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section text-accent mb-4">
            Cansado de Corridas que Não Te Levam a Lugar Nenhum?
          </h2>
          <p className="text-xl text-primary font-bold mb-12">
            E se eu te dissesse que você pode ir MUITO além?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0 mt-1">{problem.icon}</div>
                  <p className="text-foreground/90 text-left leading-relaxed">
                    {problem.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};