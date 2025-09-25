import { Button } from '@/components/ui/button';
import studioAbout from '@/assets/AboutSection.webp';
import hersonBio from '@/assets/hersonbio.webp';

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
                className="w-full aspect-square object-cover object-left rounded-2xl"
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
                Derrière Herson Studio, il y a Herson. Passionné de musique depuis l’enfance, 
                il a développé une expertise complète en composition, arrangement et production. 
                Son parcours l’a conduit de la musique de film à la collaboration avec des artistes aux univers très variés.
              </p>
              <p>
                Il a créé Herson Studio pour offrir un accompagnement sur mesure et professionnel. 
                Il résume ainsi sa vision : <i>« Mon approche se base sur l’humain : écouter, comprendre les influences 
                et m’adapter pour développer un univers unique. »</i>
              </p>
              <p>
                Cette philosophie nourrit son travail au quotidien. 
                Plus qu’un producteur, Herson est un partenaire de création : 
                ensemble, vous façonnez une musique authentique et professionnelle, 
                qui porte ta signature et ne ressemble à aucune autre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;