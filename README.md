# Yayasan Saint Lusia Angello

Site vitrine bilingue (Bahasa Indonesia / English) pour la maison d'orphelins Yayasan Saint Lusia Angello, basée à Jakarta, Indonésie.

Il permet aux visiteurs internationaux et locaux de :
- Découvrir la mission, les programmes et l'impact de la maison
- Faire un don financier (coordonnées bancaires)
- Donner des **vêtements** et des **meubles**
- Devenir bénévole
- Contacter la maison

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS 3**
- **lucide-react** pour les icônes
- Context React simple pour la gestion de la langue (ID / EN), persistance via `localStorage`

## Démarrer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → http://localhost:5173

# 3. Build de production
npm run build

# 4. Prévisualiser le build
npm run preview
```

## Structure

```
src/
├── App.tsx                  # Montage des sections
├── main.tsx                 # Entrée React + LanguageProvider
├── index.css                # Tailwind + styles globaux
├── i18n/
│   ├── LanguageProvider.tsx # Contexte de langue (ID / EN)
│   └── translations.ts      # Toutes les traductions
├── components/
│   ├── Header.tsx           # Nav + menu mobile + switcher langue
│   ├── Footer.tsx           # Footer + réseaux sociaux + liens
│   ├── LanguageSwitcher.tsx # Bouton ID / EN
│   └── Logo.tsx             # Logo SVG inline
└── sections/
    ├── Hero.tsx             # Hero + stats
    ├── About.tsx            # Qui nous sommes
    ├── Mission.tsx          # Vision + mission + valeurs
    ├── Programs.tsx         # 6 programmes (logement, école, nutrition, santé, formation, spirituel)
    ├── Impact.tsx           # Témoignages
    ├── Donate.tsx           # Dons financiers, vêtements, meubles, bénévolat
    ├── Gallery.tsx          # Galerie photos
    └── Contact.tsx          # Infos + formulaire
```

## Personnalisation

- **Textes** : tout est dans `src/i18n/translations.ts` (clés en français d'organisation, valeurs ID / EN)
- **Coordonnées bancaires et contact** : modifier dans `translations.ts` et dans les sections `Donate.tsx`, `Contact.tsx`, `Footer.tsx`
- **Images** : actuellement sur Unsplash, à remplacer par les photos réelles de la maison
- **Couleurs** : palette `brand` (orange chaleureux) et `ocean` (bleu confiance) dans `tailwind.config.js`
