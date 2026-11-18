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
