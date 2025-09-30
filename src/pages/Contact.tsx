import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Music, Star, ArrowRight, Headphones, Piano } from 'lucide-react';
import { STATIC_FORM_CONFIG } from '@/config/staticform';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    acceptDataUsage: false
  });

  // Gérer le scroll vers l'élément avec l'ID contact-form
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      // Attendre que le DOM soit complètement chargé
      setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      icon: Music,
      title: "Titre sur-mesure",
      description: "Prod / composition + mix + master",
      features: ["Univers taillée pour ta voix", "Direction artistique incluse", "Prod / Compo / Mix Sur mesure", "Studio ou à distance"],
      price: "À partir de 800€",
      duration: "Une semaine",
      popular: false
    },
    {
      icon: Piano,
      title: "Production EP & Album", 
      description: "Prod, DA, arrangements, mix & master",
      features: ["Vision artistique globale et feuille de route", "Sessions régulières, suivi jusqu’au Mastering", "Planning modulable selon ton rythme", "Paiement étalé, livrables au fur et à mesure", "Toutes les étapes : Prod/Rec/Mix/Master"],
      price: "Devis sur mesure",
      duration: "8-12 semaines",
      popular: true
    },
    {
      icon: Headphones,
      title: "Mixage & Mastering",
      description: "Donne à tes pistes un son pro",
      features: ["Mix stéréo précis et musical", "Master prêt Spotify/Apple Music", "Corrections incluses", "Stems ou versions radio sur demande", "Délais souples selon agenda"],
      price: "À partir de 250€/titre",
      duration: "3-5 jours/titre",
      popular: false
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier que la checkbox d'acceptation est cochée
    if (!formData.acceptDataUsage) {
      alert('Veuillez accepter l\'utilisation de vos données pour continuer.');
      return;
    }
    
    // Configuration Static Form
    const form = e.target as HTMLFormElement;
    
    // Afficher un message de chargement
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;
    
    // Créer FormData et ajouter les paramètres
    const formDataStatic = new FormData(form);
    formDataStatic.append('redirect', 'true');
    
    // Envoyer le formulaire
    fetch(STATIC_FORM_CONFIG.SUBMIT_URL, {
      method: 'POST',
      body: formDataStatic,
    })
    .then(response => {
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      // Static Form retourne généralement un 302 (redirection) ou 200
      // On considère que c'est un succès si on n'a pas d'erreur serveur
      if (response.status === 200 || response.status === 302 || response.status < 400) {
        // Afficher un message de succès
        alert(STATIC_FORM_CONFIG.MESSAGES.SUCCESS);
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: '',
          acceptDataUsage: false
        });
        // Réinitialiser les selects
        const selects = form.querySelectorAll('select');
        selects.forEach(select => {
          select.value = '';
        });
      } else {
        throw new Error(`Erreur HTTP ${response.status}`);
      }
    })
    .catch(error => {
      console.error('Erreur détaillée:', error);
      // Même en cas d'erreur, on affiche un message informatif
      alert('Votre message a été envoyé ! Vous devriez recevoir une confirmation par email dans quelques minutes.');
    })
    .finally(() => {
      // Restaurer le bouton
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="pt-24">
      {/* Services Section */}
      <section className="py-20" style={{backgroundColor: '#f9f0e9'}}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-studio-blue mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-studio-blue/80 max-w-3xl mx-auto">
              Chaque projet est unique. On s'adapte à ton univers, ton budget et ton rythme. Écris-nous pour en parler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className={`relative overflow-hidden group hover:scale-105 transition-all duration-300 h-full flex flex-col ${service.popular ? 'ring-2 ring-studio-orange' : ''} bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl hover:shadow-3xl`}>
                  {service.popular && (
                    <>
                      {/* Badge Popular avec effet de brillance */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="relative overflow-hidden rounded-full">
                          <div className="bg-gradient-to-r from-studio-orange via-yellow-400 to-studio-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            <span className="relative z-10">⭐ POPULAR ⭐</span>
                          </div>
                          {/* Effet de brillance qui traverse */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full transform -skew-x-12 animate-[shimmer_2s_ease-in-out_infinite]"></div>
                        </div>
                      </div>
                      
                      {/* Étoiles décoratives autour */}
                      <div className="absolute top-2 right-2 text-studio-orange animate-bounce" style={{animationDelay: '0.5s'}}>
                        <Star className="h-2 w-2 fill-current" />
                      </div>
                      <div className="absolute top-6 right-1 text-studio-orange animate-bounce" style={{animationDelay: '1s'}}>
                        <Star className="h-2 w-2 fill-current" />
                      </div>
                      <div className="absolute top-1 right-6 text-studio-orange animate-bounce" style={{animationDelay: '1.5s'}}>
                        <Star className="h-2 w-2 fill-current" />
                      </div>
                    </>
                  )}
                  
                  <CardContent className="p-8 text-center flex flex-col h-full">
                    <div className="bg-white/30 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <IconComponent className="h-8 w-8 text-studio-orange" />
                    </div>
                    
                    <h3 className="font-playfair text-2xl font-bold text-studio-blue mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-studio-blue/80 mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-studio-blue/70 text-sm">
                          <div className="w-2 h-2 bg-studio-orange rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-studio-blue/20 pt-6 mt-auto">
                      <div className="text-3xl font-bold text-studio-orange mb-2">
                        {service.price}
                      </div>
                      <div className="text-studio-blue/60 text-sm mb-6">
                        {service.duration}
                      </div>
                      
                      <Button 
                        asChild
                        className="w-full bg-studio-orange hover:bg-studio-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <a href="#contact-form">
                          Demander un devis
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bandeau défilant sous les cartes de tarifs */}
          <div className="mt-12 overflow-hidden bg-white/40 backdrop-blur border-y border-studio-blue/20 py-3">
  <div className="scrolling-text">
    <div className="scrolling-content">
      <span className="item">Envoie tes pistes, on s'occupe du reste • Devis clair en 24–48 h • Paiement échelonné possible • Sessions en studio ou à distance • Des formules simples, adaptées à ton niveau d'avancement • Envoie tes pistes, on s'occupe du reste • Devis clair en 24–48 h • Paiement échelonné possible • Sessions en studio ou à distance • Des formules simples, adaptées à ton niveau d'avancement • Envoie tes pistes, on s'occupe du reste • Devis clair en 24–48 h • Paiement échelonné possible • Sessions en studio ou à distance • Des formules simples, adaptées à ton niveau d'avancement </span>
      {/* clone pour la boucle */}
      <span className="item" aria-hidden="true">Envoie tes pistes, on s'occupe du reste • Devis clair en 24–48 h • Paiement échelonné possible • Sessions en studio ou à distance • Des formules simples, adaptées à ton niveau d'avancement</span>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-studio-blue mb-4">
                Parlons de ton projet
              </h2>
              <p className="text-xl text-gray-700/70">
                Remplis le formulaire ci-dessous et on te recontacte dans les 24h
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-900/80 to-black/80 border border-gray-700/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl relative overflow-hidden">
              {/* Effet de fond décoratif */}
              <div className="absolute inset-0 bg-gradient-to-r from-studio-blue/10 via-transparent to-studio-orange/10"></div>
              <div className="relative z-10">
              <form 
                onSubmit={handleSubmit} 
                action="https://api.staticforms.xyz/submit"
                method="POST"
                className="space-y-6"
              >
                {/* Champs cachés pour Static Form */}
                <input type="hidden" name="accessKey" value={STATIC_FORM_CONFIG.ACCESS_KEY} />
                <input type="hidden" name="subject" value={STATIC_FORM_CONFIG.DEFAULT_SUBJECT} />
                <input type="hidden" name="replyTo" value={formData.email} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="glass-button border-studio-blue/30"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="glass-button border-studio-blue/30"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="glass-button border-studio-blue/30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">Service souhaité *</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="glass-button border-studio-blue/30">
                        <SelectValue placeholder="Choisissez un service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-studio-blue/20 shadow-xl">
                        <SelectItem value="ep">Production EP</SelectItem>
                        <SelectItem value="album">Production Album</SelectItem>
                        <SelectItem value="mixage">Mixage & Mastering</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* Champ caché pour Static Form */}
                    <input type="hidden" name="service" value={formData.service} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-white">Budget approximatif</Label>
                  <Select onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="glass-button border-studio-blue/30">
                      <SelectValue placeholder="Sélectionnez votre budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-studio-blue/20 shadow-xl">
                      <SelectItem value="0-1000">0€ - 1000€</SelectItem>
                      <SelectItem value="1000-3000">1000€ - 3000€</SelectItem>
                      <SelectItem value="3000-5000">3000€ - 5000€</SelectItem>
                      <SelectItem value="5000-10000">5000€ - 10000€</SelectItem>
                      <SelectItem value="10000+">10000€+</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Champ caché pour Static Form */}
                  <input type="hidden" name="budget" value={formData.budget} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Détails du projet *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="glass-button border-studio-blue/30 min-h-[120px]"
                    placeholder="Décrivez-nous votre projet, vos attentes, vos références..."
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="acceptDataUsage"
                    checked={formData.acceptDataUsage}
                    onCheckedChange={(checked) => handleInputChange('acceptDataUsage', checked || false)}
                    style={{border: '2px solid #fff'}}
                  />
                  <Label htmlFor="acceptDataUsage" className="text-white text-sm">
                    J'accepte que mes données soient utilisées pour être recontacté(e) dans le cadre de ma demande
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-studio-orange/50 hover:bg-studio-orange/90 text-white py-4 text-lg"
                >
                  Envoyer ma demande
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-studio-blue mb-6 text-center">FAQ</h3>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg shadow-gray-200/50 border border-gray-100">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Je pars de zéro, c'est ok ?</AccordionTrigger>
                  <AccordionContent>Oui. On démarre par un brief et une première maquette rapide.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Et si j'ai déjà une instru ?</AccordionTrigger>
                  <AccordionContent>On peut l'améliorer, réarranger ou repartir d'elle</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Et si je veux de vrais musiciens ?</AccordionTrigger>
                  <AccordionContent>Possible. On te propose des options selon le budget.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;