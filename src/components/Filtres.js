import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { categories, couleurs, espace, polices, tailles } from '../theme';

// La barre des filtres : « Tout », puis une étiquette par catégorie.
// actif : la clé choisie ('tout', 'stickers'...) ; onChoisir : la fonction à appeler.
const Filtres = ({ actif, onChoisir }) => {
  const cles = ['tout', ...Object.keys(categories)];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.barre}>
      {cles.map(cle => {
        const choisi = cle === actif;

        return (
          <Pressable
            key={cle}
            onPress={() => onChoisir(cle)}
            style={[styles.filtre, choisi && styles.filtreChoisi]}
          >
            <Text style={[styles.texte, choisi && styles.texteChoisi]}>
              {cle === 'tout' ? 'Tout' : categories[cle].label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  barre: {
    gap: espace.s,
    paddingBottom: espace.m,
  },
  filtre: {
    paddingVertical: espace.s,
    paddingHorizontal: espace.m,
    borderWidth: 1,
    borderColor: couleurs.texte,
    borderRadius: 999,
  },
  filtreChoisi: {
    backgroundColor: couleurs.accent,
    borderColor: couleurs.accent,
  },
  texte: {
    color: couleurs.texte,
    fontFamily: polices.texteGras,
    fontSize: tailles.petit,
  },
  texteChoisi: {
    color: couleurs.surface,
  },
});

export default Filtres;
