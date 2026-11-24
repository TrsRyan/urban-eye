# Journal de pilotage - Urban Eye

Une entrée par séance. Quelques lignes par rubrique : des faits, pas des phrases toutes faites.

## Mercredi 18 novembre 2026 - Jalon 1 : la grille filtrable

### Ce que mon application fait de plus qu'au début de la séance

- Au début il y avait juste l'écran de base d'Expo. Maintenant il y a une carte avec la photo, la pastille de la catégorie, le titre, le lieu et la date, et ses couleurs viennent de theme.js.
- Les 8 captures s'affichent en grille sur 2 colonnes avec FlatList, avec "Urban Eye" et le nombre de captures en haut.
- On peut filtrer par catégorie (useState). Quand je touche Graff il reste 2 cartes et le compteur passe à 2.

### Ce que j'ai demandé à l'assistant

(Le but que je lui ai donné, pas le texte mot pour mot.)

- De copier le kit et de taper le code de la page du cours.
- De m'expliquer simplement chaque étape, surtout à quoi sert theme.js, FlatList et les filtres.
- De m'aider parce que le QR code ne marchait pas. En fait je n'avais pas Expo Go sur mon téléphone.

### Ce que j'ai corrigé ou refusé, et pourquoi

- J'avais collé `npx expo start` deux fois dans le terminal, du coup Expo cherchait un dossier "startnpx". Je l'ai retapé une seule fois.
- J'ai gardé les couleurs du kit, ma direction artistique viendra plus tard dans theme.js.

### Ce que je ne sais pas encore expliquer

- Les `...` dans `['tout', ...Object.keys(categories)]`.
- Le `? :` pour choisir entre deux valeurs.
- Comment FlatList fait pour dessiner seulement les cartes qu'on voit à l'écran.

## Mardi 24 novembre 2026 - Jalon 2 : la fiche d'une capture

### Ce que mon application fait de plus qu'au début de la séance

- Quand je touche une carte, sa fiche s'ouvre : la grande image, la catégorie, le titre, le lieu et la date. La flèche en haut ramène à la grille.
- Un seul fichier, `app/capture/[id].js`, sert pour les 8 fiches. Il retrouve la capture avec son numéro.
- Si on va sur `/capture/999`, l'app affiche « Capture introuvable » au lieu de planter.

### Ce que j'ai demandé à l'assistant

(Le but que je lui ai donné, pas le texte mot pour mot.)

- De taper le code et les commandes de la page du cours.
- De m'expliquer le pourquoi de chaque étape : à quoi sert "main" dans package.json, le scheme, le dossier app/ et la touche w.

### Ce que j'ai corrigé ou refusé, et pourquoi

- Le port 8081 était déjà pris par un autre serveur Expo. J'ai refusé le port 8082 et j'ai relancé sur 8081 une fois l'autre fermé.
- J'ai préféré lancer le serveur moi-même pour scanner le QR code, plutôt que taper l'adresse à la main dans Expo Go.

### Ce que je ne sais pas encore expliquer

- À quoi sert exactement `asChild` sur le `Link`.
- Pourquoi il faut `String()` pour comparer les numéros des captures.
