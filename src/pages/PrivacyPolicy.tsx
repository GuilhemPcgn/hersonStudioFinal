import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Politique de confidentialité
          </h1>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 space-y-8">
            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Collecte des données personnelles
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Herson Studio s'engage à protéger votre vie privée et vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
                </p>
                <p>
                  Nous collectons uniquement les données personnelles que vous nous fournissez volontairement, 
                  notamment lorsque vous nous contactez via le formulaire de contact ou par email.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Types de données collectées
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>Les données personnelles que nous pouvons collecter incluent :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Informations sur votre projet musical</li>
                  <li>Données de navigation (cookies techniques)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Utilisation des données
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Vous fournir des informations sur nos services</li>
                  <li>Établir des devis personnalisés</li>
                  <li>Améliorer nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Partage des données
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, 
                  sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>Avec nos prestataires de services (hébergement, maintenance) sous contrat de confidentialité</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Sécurité des données
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger 
                  vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, 
                  la divulgation, l'altération ou la destruction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Cookies
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Notre site utilise des cookies techniques nécessaires au fonctionnement du site. 
                  Ces cookies ne collectent pas de données personnelles et sont automatiquement supprimés 
                  à la fermeture de votre navigateur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Vos droits
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit d'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à l'adresse : [À compléter]
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Conservation des données
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
                  pour lesquelles elles ont été collectées, ou conformément aux obligations légales.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Modifications de la politique
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment. 
                  Toute modification sera publiée sur cette page avec la date de mise à jour.
                </p>
                <p><strong>Dernière mise à jour :</strong> [À compléter]</p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-studio-orange mb-4">
                Contact
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement 
                  de vos données personnelles, vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Par email : [À compléter]</li>
                  <li>Par téléphone : [À compléter]</li>
                  <li>Par courrier : [À compléter]</li>
                </ul>
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

export default PrivacyPolicy;
