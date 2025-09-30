import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

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

        {/* CTA Section */}
        <div className="mt-16 flex justify-center">
          <Link 
            to="/contact#contact-form"
            className="group relative inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-studio-orange to-orange-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl hover:shadow-studio-orange/50 transition-all duration-500 hover:scale-105"
          >
            {/* Effet de brillance animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Contenu du bouton */}
            <Sparkles className="w-6 h-6 relative z-10 animate-pulse" />
            <span className="relative z-10 font-playfair">Lancez votre projet</span>
            
            {/* Flèche animée */}
            <svg 
              className="w-6 h-6 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Particules décoratives */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;