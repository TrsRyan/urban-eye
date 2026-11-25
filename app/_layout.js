import { Stack } from 'expo-router';
import { couleurs, polices } from '../src/theme';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: couleurs.fond },
        headerTintColor: couleurs.texte,
        headerTitleStyle: { fontFamily: polices.titre },
        headerShadowVisible: false,
        headerBackTitle: 'Captures',
      }}
    >
      {/* La grille a déjà son en-tête (EnTete) : pas de barre */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
