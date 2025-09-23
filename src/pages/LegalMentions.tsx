import { Link } from 'react-router-dom';

const LegalMentions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Mentions légales
          </h1>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 space-y-8">
            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Éditeur du site
              </h2>
              <div className="text-gray-300 space-y-2">
                <p><strong>Raison sociale :</strong> Herson Studio</p>
                <p><strong>Forme juridique :</strong> [À compléter]</p>
                <p><strong>Adresse :</strong> [À compléter]</p>
                <p><strong>Téléphone :</strong> [À compléter]</p>
                <p><strong>Email :</strong> [À compléter]</p>
                <p><strong>Directeur de la publication :</strong> [À compléter]</p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Hébergement
              </h2>
              <div className="text-gray-300 space-y-2">
                <p><strong>Hébergeur :</strong> [À compléter]</p>
                <p><strong>Adresse :</strong> [À compléter]</p>
                <p><strong>Téléphone :</strong> [À compléter]</p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Propriété intellectuelle
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Responsabilité
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                  mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, 
                  à l'adresse [À compléter], en décrivant le problème de la manière la plus précise possible.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Liens hypertextes
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Ce site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
                  Les liens vers ces autres ressources vous font quitter le site hersonstudio.com.
                </p>
                <p>
                  Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l'éditeur. 
                  Aucune autorisation ou demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Droit applicable
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Tout litige en relation avec l'utilisation du site hersonstudio.com est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de [À compléter].
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-studio-orange text-white font-semibold rounded-lg hover:bg-studio-orange/90 transition-colors duration-300"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
