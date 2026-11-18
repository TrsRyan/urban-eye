import { StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, polices, tailles } from '../theme';

// L'en-tête : le nom de l'application et le nombre de captures affichées.
const EnTete = ({ nombre }) => {
  return (
    <View style={styles.entete}>
      <Text style={styles.nom}>Urban Eye</Text>
      <Text style={styles.compte}>{nombre} captures</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  entete: {
    paddingVertical: espace.l,
  },
  nom: {
    color: couleurs.texte,
    fontFamily: polices.titre,
    fontSize: tailles.grand,
  },
  compte: {
    color: couleurs.texteDoux,
    fontFamily: polices.texte,
    fontSize: tailles.texte,
  },
});

export default EnTete;
