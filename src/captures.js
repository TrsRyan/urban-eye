// Urban Eye : huit captures de démonstration.
// Les vraies photos arriveront avec l'appareil photo du téléphone, et les vraies
// données avec l'API. D'ici là, une image par catégorie.
// Ce fichier ne contient QUE des données : ni couleur ni police.
// L'apparence de chaque catégorie est dans theme.js.

import stickerImage from './assets/images/capture-sticker.png';
import enseigneImage from './assets/images/capture-enseigne.png';
import graffImage from './assets/images/capture-graff.png';
import wtfImage from './assets/images/capture-wtf.png';

// categorie : une clé de l'objet categories de theme.js
export const captures = [
  {
    id: 1,
    image: stickerImage,
    titre: 'Chat masqué',
    categorie: 'stickers',
    lieu: 'Rue Haute',
    date: '04/11/2026',
  },
  {
    id: 2,
    image: enseigneImage,
    titre: 'Friterie, lettres peintes',
    categorie: 'enseignes',
    lieu: 'Place Jourdan',
    date: '05/11/2026',
  },
  {
    id: 3,
    image: graffImage,
    titre: 'Baleine sur un pignon',
    categorie: 'graff',
    lieu: 'Quai des Charbonnages',
    date: '05/11/2026',
  },
  {
    id: 4,
    image: wtfImage,
    titre: 'Un fauteuil sur un abribus',
    categorie: 'wtf',
    lieu: 'Avenue Louise',
    date: '06/11/2026',
  },
  {
    id: 5,
    image: stickerImage,
    titre: 'Oeil fluo sur un poteau',
    categorie: 'stickers',
    lieu: 'Gare du Midi',
    date: '07/11/2026',
  },
  {
    id: 6,
    image: enseigneImage,
    titre: "Néon d'une ancienne pharmacie",
    categorie: 'enseignes',
    lieu: "Chaussée d'Ixelles",
    date: '08/11/2026',
  },
  {
    id: 7,
    image: graffImage,
    titre: 'Renard sous le pont',
    categorie: 'graff',
    lieu: 'Rue Gray',
    date: '09/11/2026',
  },
  {
    id: 8,
    image: wtfImage,
    titre: 'Une baignoire sur un balcon',
    categorie: 'wtf',
    lieu: 'Parvis de Saint-Gilles',
    date: '10/11/2026',
  },
];
