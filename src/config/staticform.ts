export const STATIC_FORM_CONFIG = {
  // CLÉ API obtenue sur https://staticforms.xyz
  ACCESS_KEY: 'sf_4j85e9ahc445lhd08ngdbnmb',
  
  // URL d'envoi de Static Form
  SUBMIT_URL: 'https://api.staticforms.xyz/submit',
  
  // Sujet par défaut des emails reçus
  DEFAULT_SUBJECT: 'Nouvelle demande de contact - Herson Studio',
  
  // Configuration des redirections
  REDIRECT_AFTER_SUBMIT: true,
  
  // Messages de succès et d'erreur
  MESSAGES: {
    SUCCESS: 'Votre message a été envoyé avec succès ! Nous vous recontacterons dans les 48h.',
    ERROR: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.'
  }
};