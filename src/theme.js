// Urban Eye : votre direction artistique, en un seul endroit.
// Les composants lisent leurs couleurs, leurs polices et leurs espacements ICI,
// jamais en dur. Changer une valeur ici change toute l'application.

// ==========================================
// LES COULEURS
// ==========================================
export const couleurs = {
  fond: '#F4F1EA',      // le fond de l'écran
  surface: '#FFFFFF',   // le fond d'une carte
  texte: '#111216',     // le texte principal
  texteDoux: '#6B6B6B', // le texte secondaire : le lieu, la date
  accent: '#FF4F1F',    // la couleur de la marque : le filtre choisi, les détails
};

// ==========================================
// LES QUATRE CATÉGORIES
// couleur : le fond de la pastille ; encre : son texte ;
// forme : 'rond' ou 'carre'
// ==========================================
export const categories = {
  stickers: { label: 'Stickers', couleur: '#FFD23F', encre: '#111216', forme: 'rond' },
  enseignes: { label: 'Enseignes', couleur: '#2F6BFF', encre: '#FFFFFF', forme: 'carre' },
  graff: { label: 'Graff', couleur: '#FF4FA3', encre: '#111216', forme: 'rond' },
  wtf: { label: 'WTF', couleur: '#B8FF3C', encre: '#111216', forme: 'carre' },
};

// ==========================================
// LES POLICES
// Vides pour l'instant : le téléphone utilise sa police système.
// Elles arrivent avec votre direction artistique : le nom exact de
// chaque police, tel que useFonts() la charge.
// ==========================================
export const polices = {
  titre: undefined,
  texte: undefined,
  texteGras: undefined,
};

// ==========================================
// LES TAILLES, LES ESPACEMENTS, LES ARRONDIS
// ==========================================
export const tailles = {
  petit: 12,
  texte: 15,
  titre: 18,
  grand: 32,
};

export const espace = {
  s: 8,
  m: 16,
  l: 24,
};

export const rayon = 12;
