import { Text, View } from 'react-native'
import { SplashScreen, Slot, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  return(
    <Stack>
      <Stack.Screen name="(art)" options={{headerShown : false}}/>
      <Stack.Screen name="(home)" options={{headerShown : false}}/>
      <Stack.Screen name="(rc)" options={{headerShown : false}}/>
      <Stack.Screen name="(auth)" options={{headerShown : false}}/>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="github" options={{headerShown : false}}/>
    </Stack>
  )
}

// this is the root route whatever routes are created is started and controlled from here

export default RootLayout
