import { Button } from '@/components/ui/button';
import studioAbout from '@/assets/AboutSection.jpeg';
import hersonBio from '@/assets/hersonbio.jpeg';

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-studio-blue">
              Ton projet musical, façonné sur-mesure
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Herson Studio, c'est plus qu'un lieu d'enregistrement, c'est l'expertise 
                et l'accompagnement d'un musicien compositeur au service de ton projet.
              </p>
              <p>
                Ensemble, on prend le temps de construire ton identité sonore, d'explorer ce qui te rend unique 
                et de produire une musique qui laisse une vraie empreinte. 
                Chaque composition, chaque arrangement et chaque mix sont pensés sur-mesure pour servir ton univers. 
                De la direction artistique au mastering, je t'accompagne à chaque étape pour donner vie à un projet fort, 
                authentique et professionnel.
              </p>
              <p>
                Single, EP ou album, quelle que soit ton ambition, l'objectif reste le même : 
                trouver ce qui fait ta singularité et créer une musique qui marque.
              </p>
            </div>
            {/* <Button 
              size="lg" 
              className="bg-studio-orange hover:bg-studio-orange/90 text-white px-8 py-4 rounded-xl"
            >
              En savoir plus sur notre équipe
            </Button> */}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="glass-card p-2 rounded-3xl overflow-hidden">
              <img
                src={studioAbout}
                alt="Studio d'enregistrement Herson avec équipement professionnel"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Section Bio du musicien */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image à gauche */}
          <div className="relative order-2 lg:order-1">
            <div className="glass-card p-2 rounded-3xl overflow-hidden">
              <img
                src={hersonBio}
                alt="Herson - Musicien compositeur et producteur"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Text Content à droite */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-studio-blue">
              Herson, musicien compositeur
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Passionné de musique depuis l'enfance, j'ai développé une expertise complète 
                dans la composition, l'arrangement et la production musicale. 
                Mon parcours m'a amené à travailler avec de nombreux artistes, 
                explorant différents styles et univers sonores.
              </p>
              <p>
                Fort de cette expérience, j'ai créé Herson Studio pour offrir un accompagnement 
                personnalisé et professionnel. Mon approche se base sur l'écoute, 
                la compréhension de ton univers artistique et la recherche constante 
                de ce qui te rend unique.
              </p>
              <p>
                Que tu sois débutant ou artiste confirmé, mon objectif est de t'aider 
                à concrétiser ta vision musicale avec authenticité et professionnalisme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;