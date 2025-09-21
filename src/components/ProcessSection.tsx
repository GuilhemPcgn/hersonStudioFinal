const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Discussion de votre projet et de vos objectifs"
    },
    {
      number: "02", 
      title: "Planification",
      description: "Établissement du planning et des étapes"
    },
    {
      number: "03",
      title: "Production", 
      description: "Enregistrement et création en studio"
    },
    {
      number: "04",
      title: "Finalisation",
      description: "Mixage, mastering et livraison finale"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Notre Processus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-md border border-gray-600 p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-6xl font-bold text-studio-orange mb-4 font-playfair">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;