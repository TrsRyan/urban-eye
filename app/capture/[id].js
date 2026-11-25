import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { lireCapture } from '../../src/api';
import { couleurs, espace, polices, tailles } from '../../src/theme';
import Fiche from '../../src/components/Fiche';

export default function EcranCapture() {
  const { id } = useLocalSearchParams();
  // undefined = pas encore reçue, null = introuvable
  const [capture, setCapture] = useState(undefined);

  useEffect(() => {
    lireCapture(id)
      .then(setCapture)
      .catch(() => setCapture(null));
  }, [id]);

  if (capture === undefined) {
    return (
      <View style={styles.vide}>
        <ActivityIndicator size="large" color={couleurs.accent} />
      </View>
    );
  }

  if (capture === null) {
    return (
      <View style={styles.vide}>
        <Stack.Screen options={{ title: 'Introuvable' }} />
        <Text style={styles.titre}>Capture introuvable</Text>
        <Text style={styles.texte}>Aucune capture ne porte le numéro {id}.</Text>
        <Link href="/" style={styles.lien}>Retour à la grille</Link>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: capture.titre }} />
      <Fiche capture={capture} />
    </>
  );
}

const styles = StyleSheet.create({
  vide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: espace.m,
    padding: espace.m,
    backgroundColor: couleurs.fond,
  },
  titre: {
    color: couleurs.texte,
    fontFamily: polices.titre,
    fontSize: tailles.grand,
  },
  texte: {
    color: couleurs.texteDoux,
    fontFamily: polices.texte,
    fontSize: tailles.texte,
  },
  lien: {
    color: couleurs.accent,
    fontFamily: polices.texteGras,
    fontSize: tailles.texte,
  },
});
