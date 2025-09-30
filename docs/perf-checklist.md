# 🚀 Checklist de Performance - Herson Studio

## 📋 Commandes de Base

### 1. Build et Preview
```bash
# Build de production
pnpm build

# Preview local (simule la production)
pnpm preview

# Vérification de la taille du bundle
pnpm size
```

### 2. Accès à l'Application
- **URL locale** : `http://localhost:4173`
- **Mode** : Production (optimisé)
- **Cache** : Activé

---

## 🔍 Vérifications Chrome DevTools

### 1. Performance Tab (Critique)

#### **Setup de test**
1. Ouvrir Chrome DevTools (F12)
2. Aller dans l'onglet **Performance**
3. Cliquer sur **Record** (cercle rouge)
4. **Scroller la page d'accueil** pendant 10-15 secondes
5. Arrêter l'enregistrement

#### **Métriques à vérifier**
- ✅ **FPS** : > 55-60 fps constant
- ✅ **Layout Thrash** : Absence de reflows répétés
- ✅ **Paint Events** : Minimisés grâce à `contain: paint`
- ✅ **Composite Layers** : Optimisés avec `will-change`

#### **Signaux d'alerte**
- ❌ FPS < 50 fps
- ❌ Layout thrash visible (barres rouges)
- ❌ Paint coûteux répétés
- ❌ Main thread bloqué > 50ms

### 2. Coverage Tab

#### **Setup de test**
1. DevTools → **Coverage** tab
2. Cliquer sur **Start instrumenting coverage**
3. Recharger la page
4. Naviguer sur toutes les pages
5. Arrêter l'instrumentation

#### **Métriques cibles**
- ✅ **JavaScript** : > 70% d'utilisation
- ✅ **CSS** : > 70% d'utilisation
- ❌ Code mort : < 30%

### 3. Network Tab

#### **Setup de test**
1. DevTools → **Network** tab
2. Sélectionner **Slow 3G** dans le throttling
3. Recharger la page
4. Vérifier les métriques

#### **Métriques critiques**
- ✅ **JS initial** : < 300 kB (gzippé)
- ✅ **LCP** : < 2.5 secondes
- ✅ **CLS** : < 0.1
- ✅ **FCP** : < 1.8 secondes

---

## 🎯 Checkpoints d'Optimisation

### ✅ Images
- [ ] **Lazy loading** activé sur toutes les images
- [ ] **Formats optimisés** : WebP/AVIF
- [ ] **Tailles appropriées** : pas d'images surdimensionnées
- [ ] **Preload** sur les images critiques (hero)

### ✅ Vidéos
- [ ] **Preload metadata** sur la vidéo hero
- [ ] **Format optimisé** : WebM + MP4 fallback
- [ ] **Lazy loading** sur les vidéos non-critiques

### ✅ Fonts
- [ ] **Font-display: swap** configuré
- [ ] **Preload** sur les fonts critiques
- [ ] **Subset** des caractères utilisés
- [ ] **Fallback** appropriés

### ✅ Cache Headers
- [ ] **Static assets** : Cache long (1 an)
- [ ] **HTML** : Cache court (1 heure)
- [ ] **API responses** : Cache approprié

### ✅ JavaScript
- [ ] **Code splitting** par route
- [ ] **Tree shaking** activé
- [ ] **Minification** en production
- [ ] **Gzip/Brotli** compression

### ✅ CSS
- [ ] **Critical CSS** inlined
- [ ] **Non-critical CSS** lazy loaded
- [ ] **Unused CSS** éliminé
- [ ] **Contain: paint** sur les sections

---

## 📊 Métriques de Référence

### **Avant Optimisation** (baseline)
- JS initial : ~400 kB
- LCP : ~3.5s
- FPS : ~45 fps
- Paint events : Élevés

### **Après Optimisation** (cible)
- JS initial : < 300 kB ✅
- LCP : < 2.5s ✅
- FPS : > 55 fps ✅
- Paint events : Minimisés ✅

---

## 🚨 Actions Correctives

### Si FPS < 55
1. Vérifier les animations CSS (transform/opacity uniquement)
2. Ajouter `contain: paint` sur les sections
3. Optimiser les `will-change` properties

### Si LCP > 2.5s
1. Preload des images critiques
2. Optimiser la vidéo hero
3. Vérifier le cache des fonts

### Si JS > 300 kB
1. Analyser le bundle avec `pnpm size`
2. Vérifier le code splitting
3. Éliminer les dépendances inutiles

### Si Coverage < 70%
1. Identifier le code mort
2. Optimiser les imports
3. Vérifier le lazy loading

---

## 🔧 Commandes de Debug

```bash
# Analyse du bundle
pnpm size

# Build avec analyse
pnpm build --analyze

# Vérification des assets
ls -la dist/assets/

# Test de compression
gzip -c dist/assets/index-*.js | wc -c
```

---

## 📝 Notes de Test

### **Date du test** : ___________
### **Version** : ___________
### **Navigateur** : Chrome ___________
### **Résultats** :
- [ ] Performance : ✅/❌
- [ ] Coverage : ✅/❌  
- [ ] Network : ✅/❌
- [ ] Checkpoints : ✅/❌

### **Problèmes identifiés** :
_________________________________
_________________________________

### **Actions à prendre** :
_________________________________
_________________________________
