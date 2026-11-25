// Le seul fichier qui parle au serveur.
// Il traduit chaque contribution reçue dans la forme qu'attendent les écrans.

const BASE = 'https://api-amorce.techniques-graphiques.be';

// La dernière liste reçue : la fiche y retrouve sa capture
let memoire = [];

// Une contribution du serveur → une capture de l'application
const traduire = (c) => ({
  id: c.id,
  titre: c.note || 'Sans titre',
  lieu: c.lat != null && c.lng != null
    ? `${c.lat.toFixed(3)}, ${c.lng.toFixed(3)}`
    : 'Lieu inconnu',
  // '2026-11-24 12:41:44' → '24/11/2026'
  date: `${c.taken_at.slice(8, 10)}/${c.taken_at.slice(5, 7)}/${c.taken_at.slice(0, 4)}`,
  categorie: c.category,
  image: { uri: c.thumb_url },
  photo: { uri: c.photo_url },
  auteur: c.author_pseudo,
  lat: c.lat,
  lng: c.lng,
});

export const lireCaptures = async () => {
  const reponse = await fetch(`${BASE}/public/contributions?page=1`);
  if (!reponse.ok) {
    throw new Error(`Le serveur a répondu ${reponse.status}`);
  }
  const donnees = await reponse.json();
  memoire = donnees.items.map(traduire);
  return memoire;
};

// Le serveur n'a pas d'adresse pour une seule capture : on cherche dans la liste
export const lireCapture = async (id) => {
  if (memoire.length === 0) {
    await lireCaptures();
  }
  return memoire.find(c => String(c.id) === String(id)) ?? null;
};

// Bonus : la page suivante (Amorce en sert 24 par page).
// Les nouvelles captures s'ajoutent à la mémoire ; derniere dit s'il en reste.
export const lirePage = async (page) => {
  const reponse = await fetch(`${BASE}/public/contributions?page=${page}`);
  if (!reponse.ok) {
    throw new Error(`Le serveur a répondu ${reponse.status}`);
  }
  const donnees = await reponse.json();
  const nouvelles = donnees.items.map(traduire);
  memoire = [...memoire, ...nouvelles];
  return { captures: nouvelles, derniere: page >= donnees.pages };
};
