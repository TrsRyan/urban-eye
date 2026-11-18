import { StyleSheet, Text } from 'react-native';
import { categories, espace, polices, tailles } from '../theme';

// La pastille d'une catégorie : elle reçoit la clé (stickers, enseignes...)
// et lit dans le thème son nom, sa couleur, son encre et sa forme.
const Pastille = ({ categorie }) => {
  const c = categories[categorie];

  return (
    <Text
      style={[
        styles.pastille,
        { backgroundColor: c.couleur, color: c.encre },
        c.forme === 'rond' ? styles.rond : styles.carre,
      ]}
    >
      {c.label}
    </Text>
  );
};

const styles = StyleSheet.create({
  pastille: {
    alignSelf: 'flex-start',
    overflow: 'hidden',
    paddingVertical: 4,
    paddingHorizontal: espace.s,
    fontFamily: polices.texteGras,
    fontSize: tailles.petit,
    textTransform: 'uppercase',
  },
  rond: {
    borderRadius: 999,
  },
  carre: {
    borderRadius: 2,
  },
});

export default Pastille;
