/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TailwindProvider } from "tailwindcss-react-native";
import Register from './src/screen/Register';
import Login from './src/screen/Login';
import HomeStack from './src/stack/HomeStack';
import Pesan from './src/screen/Pesan';
import DetailPelajaran from './src/screen/DetailPelajaran';
import Prestasi from './src/screen/Prestasi';
import Percakapan from './src/screen/Percakapan';
import SubMateri from './src/screen/SubMateri';
import Latihan from './src/screen/Latihan';
import Pertanyaan from './src/screen/Pertanyaan';
import HasilLatihan from './src/screen/HasilLatihan';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <TailwindProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chat" component={Pesan} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="DetailPelajaran" component={DetailPelajaran} />
        <Stack.Screen name="Prestasi" component={Prestasi} />
        <Stack.Screen name="Percakapan" component={Percakapan} />
        <Stack.Screen name="SubMateri" component={SubMateri} />
        <Stack.Screen name="Latihan" component={Latihan} />
        <Stack.Screen name="Pertanyaan" component={Pertanyaan} />
        <Stack.Screen name="HasilLatihan" component={HasilLatihan} />

      </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
