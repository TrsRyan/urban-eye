import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { captures } from './src/captures';
import { couleurs, espace } from './src/theme';
import Carte from './src/components/Carte';
import EnTete from './src/components/EnTete';
import Filtres from './src/components/Filtres';

export default function App() {
  // La catégorie choisie dans la barre des filtres : 'tout' au départ
  const [filtre, setFiltre] = useState('tout');

  // Les captures à afficher : toutes, ou celles de la catégorie choisie
  const visibles = filtre === 'tout'
    ? captures
    : captures.filter(capture => capture.categorie === filtre);

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
          renderItem={({ item }) => <Carte capture={item} />}
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
});
