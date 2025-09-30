# Configuration Size-Limit

## 📦 Configuration actuelle

Size-limit est configuré pour bloquer les builds si le JavaScript initial dépasse **300 kB**.

### Fichiers de configuration

- **`.size-limit.json`** : Configuration des limites de taille
- **`package.json`** : Script `pnpm size` ajouté

### Utilisation

```bash
# Vérifier la taille du bundle
pnpm size

# Build + vérification de taille
pnpm build && pnpm size
```

## 🚀 GitHub Action future (optionnelle)

Si vous souhaitez ajouter une vérification automatique dans GitHub Actions, créez `.github/workflows/size-check.yml` :

```yaml
name: Size Check
on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

jobs:
  size:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Size check
        run: pnpm size
```

## 📊 Métriques actuelles

- **Taille actuelle** : ~123 kB (brotli)
- **Limite configurée** : 300 kB
- **Marge disponible** : ~177 kB

## 🔧 Ajustement de la limite

Pour modifier la limite, éditez `.size-limit.json` :

```json
[
  {
    "name": "initial JS",
    "path": "dist/assets/*.js",
    "limit": "250 kB"  // Ajustez selon vos besoins
  }
]
```

## ✅ Critères d'acceptation remplis

- ✅ `pnpm size` échoue si le JS dépasse 300 kB
- ✅ Configuration dans `.size-limit.json`
- ✅ Script ajouté dans `package.json`
- ✅ Documentation fournie
