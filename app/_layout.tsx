import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
      options={{ headerShown: false }} // Esto oculta la barra de navegación 
      />
    </Stack>
  );
}
