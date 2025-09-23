# Configuration Static Form

## 📧 Configuration du formulaire de contact

Le formulaire de contact a été configuré pour utiliser **Static Form**, un service gratuit qui permet de recevoir les soumissions de formulaires par email sans backend.

### 🔑 Obtenir votre clé API

1. **Allez sur [staticforms.xyz](https://staticforms.xyz)**
2. **Créez un compte gratuit**
3. **Générez une nouvelle clé API**
4. **Copiez votre clé API**

### ⚙️ Configuration

1. **Ouvrez le fichier** `src/config/staticform.ts`
2. **Remplacez** `FAKE_API_KEY_123456789` par votre vraie clé API :

```typescript
export const STATIC_FORM_CONFIG = {
  // REMPLACEZ CETTE CLÉ PAR LA VOTRE
  ACCESS_KEY: 'VOTRE_VRAIE_CLE_API_ICI',
  // ... reste de la configuration
};
```

### 📧 Personnalisation des emails

Vous pouvez modifier dans `src/config/staticform.ts` :

- **Sujet des emails** : `DEFAULT_SUBJECT`
- **Messages de succès/erreur** : `MESSAGES.SUCCESS` et `MESSAGES.ERROR`

### 🧪 Test du formulaire

1. **Lancez le serveur de développement** :
   ```bash
   npm run dev
   ```

2. **Allez sur la page Contact** et remplissez le formulaire

3. **Vérifiez** que vous recevez bien l'email

### 📋 Champs du formulaire

Le formulaire envoie les informations suivantes :

- **Nom complet** (`name`) - Obligatoire
- **Email** (`email`) - Obligatoire
- **Téléphone** (`phone`) - Optionnel
- **Service souhaité** (`service`) - Obligatoire
- **Budget** (`budget`) - Optionnel
- **Détails du projet** (`message`) - Obligatoire

### 🔒 Sécurité

- La clé API est incluse dans le code côté client (c'est normal pour Static Form)
- Static Form gère la protection contre le spam
- Vous recevrez les emails directement dans votre boîte mail

### 🆘 Support

Si vous rencontrez des problèmes :

1. **Vérifiez** que votre clé API est correcte
2. **Consultez** la documentation de [Static Form](https://staticforms.xyz/docs)
3. **Testez** avec un formulaire simple d'abord

---

✅ **Le formulaire est maintenant prêt à recevoir vos demandes de contact !**
