# Journal de pilotage - Urban Eye

Une entrée par séance. Quelques lignes par rubrique : des faits, pas des phrases toutes faites.

## Mercredi 18 novembre 2026 - Jalon 1 : la grille filtrable

### Ce que mon application fait de plus qu'au début de la séance

- Une carte (photo, pastille de catégorie, titre, lieu, date) qui lit ses couleurs dans `theme.js`.
- Une grille de 8 cartes sur 2 colonnes avec `FlatList`, sous un en-tête « Urban Eye » qui affiche le nombre de captures.
- Une barre de filtres par catégorie avec `useState` : le nombre de captures suit le filtre choisi.

### Ce que j'ai demandé à l'assistant

(Le but que je lui ai donné, pas le texte mot pour mot.)

- Copier le kit et taper le code donné sur la page du cours.
- M'expliquer simplement chaque étape : le rôle de `theme.js`, de `FlatList`, des filtres.
- M'aider quand le QR code ne marchait pas : Expo Go n'était pas installé sur mon téléphone.

### Ce que j'ai corrigé ou refusé, et pourquoi

- La commande `npx expo start` avait été collée deux fois : je l'ai retapée une seule fois.
- J'ai gardé les couleurs du kit : la direction artistique viendra plus tard, dans `theme.js`.

### Ce que je ne sais pas encore expliquer

- Les `...` dans `['tout', ...Object.keys(categories)]`.
- Le `? :` qui choisit entre deux valeurs.
- Comment `FlatList` ne dessine que les cartes visibles à l'écran.
