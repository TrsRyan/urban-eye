import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, polices, rayon, tailles } from '../theme';
import Pastille from './Pastille';

// La fiche complète d'une capture : grande photo, catégorie, titre, lieu et date.
const Fiche = ({ capture }) => {
  return (
    <ScrollView style={styles.ecran} contentContainerStyle={styles.contenu}>
      <View style={styles.cadre}>
        <Image source={capture.image} style={styles.image} />
      </View>

      <Pastille categorie={capture.categorie} />
      <Text style={styles.titre}>{capture.titre}</Text>
      <Text style={styles.infos}>
        {capture.lieu} · {capture.date}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: couleurs.fond,
  },
  contenu: {
    gap: espace.m,
    padding: espace.m,
  },
  cadre: {
    width: '100%',
    aspectRatio: 4 / 5,
    overflow: 'hidden',
    borderRadius: rayon,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titre: {
    color: couleurs.texte,
    fontFamily: polices.titre,
    fontSize: tailles.grand,
  },
  infos: {
    color: couleurs.texteDoux,
    fontFamily: polices.texte,
    fontSize: tailles.texte,
  },
});

export default Fiche;
