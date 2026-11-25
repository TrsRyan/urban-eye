import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { lireCaptures, lirePage } from '../src/api';
import { couleurs, espace, polices, tailles } from '../src/theme';
import Carte from '../src/components/Carte';
import EnTete from '../src/components/EnTete';
import Filtres from '../src/components/Filtres';

export default function Grille() {
  // La catégorie choisie dans la barre des filtres : 'tout' au départ
  const [filtre, setFiltre] = useState('tout');
  const [captures, setCaptures] = useState([]);
  // 'chargement', 'erreur' ou 'pret'
  const [etat, setEtat] = useState('chargement');

  const charger = async () => {
    setEtat('chargement');
    try {
      setCaptures(await lireCaptures());
      setEtat('pret');
    } catch (erreur) {
      console.log('Erreur :', erreur.message);
      setEtat('erreur');
    }
  };

  // Bonus 1 : tirer la liste vers le bas pour la recharger
  const [rafraichit, setRafraichit] = useState(false);
  const rafraichir = async () => {
    setRafraichit(true);
    try {
      setCaptures(await lireCaptures());
      setPage(1);
      setDerniere(false);
    } catch (erreur) {
      console.log('Erreur :', erreur.message);
    }
    setRafraichit(false);
  };

  // Bonus 2 : en bas de la liste, la page suivante
  const [page, setPage] = useState(1);
  const [derniere, setDerniere] = useState(false);
  const suivante = async () => {
    if (derniere || rafraichit) {
      return;
    }
    try {
      const resultat = await lirePage(page + 1);
      setCaptures(avant => [...avant, ...resultat.captures]);
      setPage(page + 1);
      setDerniere(resultat.derniere);
    } catch (erreur) {
      console.log('Erreur :', erreur.message);
    }
  };

  // Une seule fois, à l'ouverture de l'écran
  useEffect(() => {
    charger();
  }, []);

  // Les captures à afficher : toutes, ou celles de la catégorie choisie
  const visibles = filtre === 'tout'
    ? captures
    : captures.filter(capture => capture.categorie === filtre);

  if (etat === 'chargement') {
    return (
      <View style={styles.centre}>
        <ActivityIndicator size="large" color={couleurs.accent} />
        <Text style={styles.message}>Chargement des captures...</Text>
      </View>
    );
  }

  if (etat === 'erreur') {
    return (
      <View style={styles.centre}>
        <Text style={styles.message}>Impossible de charger les captures.</Text>
        <Pressable style={styles.bouton} onPress={charger}>
          <Text style={styles.texteBouton}>Réessayer</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.ecran}>
        <FlatList
          data={visibles}
          keyExtractor={capture => String(capture.id)}
          numColumns={2}
          columnWrapperStyle={styles.ligne}
          contentContainerStyle={styles.contenu}
          ListHeaderComponent={
            <>
              <EnTete nombre={visibles.length} />
              <Filtres actif={filtre} onChoisir={setFiltre} />
            </>
          }
          ListEmptyComponent={
            <Text style={styles.message}>Aucune capture dans cette catégorie.</Text>
          }
          renderItem={({ item }) => <Carte capture={item} />}
          refreshing={rafraichit}
          onRefresh={rafraichir}
          onEndReached={suivante}
          onEndReachedThreshold={0.5}
        />
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: couleurs.fond,
  },
  contenu: {
    gap: espace.m,
    paddingHorizontal: espace.m,
    paddingBottom: espace.l,
  },
  ligne: {
    justifyContent: 'space-between',
  },
  centre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: espace.m,
    padding: espace.m,
    backgroundColor: couleurs.fond,
  },
  message: {
    color: couleurs.texteDoux,
    fontFamily: polices.texte,
    fontSize: tailles.texte,
    textAlign: 'center',
  },
  bouton: {
    paddingVertical: espace.s,
    paddingHorizontal: espace.m,
    borderRadius: 999,
    backgroundColor: couleurs.accent,
  },
  texteBouton: {
    color: couleurs.surface,
    fontFamily: polices.texteGras,
    fontSize: tailles.texte,
  },
});
