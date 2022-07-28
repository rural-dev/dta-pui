import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import App from './App';
import {TailwindProvider} from 'tailwindcss-react-native';
import {useAuth} from './contexts/Auth';

const data = [
  {
    key: 'one',
    title: 'Belajar Menyenangkan!',
    text: 'Kini belajar Agama jadi lebih menyenangkan dengan Aplikasi DTA PUI Karangsari',
    image: require('./assets/1.png'),
    width: 320,
    heigth: 320,
    backgroundColor: '#038B4A',
    button: 'Selanjutnya',
    last: false,
  },
  {
    key: 'two',
    title: 'Materi Digital',
    text: 'Tersedia materi Teks, Video dan Audio yang dapat diakses kapan saja',
    image: require('./assets/2.png'),
    width: 320,
    heigth: 320,
    backgroundColor: '#038B4A',
    button: 'Selanjutnya',
    last: false,
  },
  {
    key: 'three',
    title: 'Media Belajar Lengkap',
    text: 'Jadikan Aplikasi ini sebagai media belajar tambahan dirumah sebagai alternatif, sehingga waktu luang anak lebih bermanfaat!',
    image: require('./assets/logo-pui-2.png'),
    width: 150,
    heigth: 143,
    backgroundColor: '#038B4A',
    button: 'Ayo Mulai',
    last: true,
  },
];

type Item = typeof data[0];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 67, // Add padding to offset large buttons and pagination in bottom of page
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginTop: 42,
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 42,
    paddingHorizontal: 40,
  },
  next: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
  done: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#050505',
    textAlign: 'center',
  },
  logo1: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginTop: 42,
  },
  logo2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    // marginTop: 42,
    // paddingHorizontal: 40
  },
});

const Onboarding = () => {
  const auth = useAuth();
  console.log(auth)
  const _renderItem = ({item}: {item: Item}) => {
    return (
      <TailwindProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
          }}>
          <View style={styles.slide}>
            <Image
              source={item.image}
              style={{width: item.width, height: item.heigth}}
            />
            {item.last && (
              <>
                <Text style={styles.logo1}>DTA PUI Karangsari</Text>
                <Text style={styles.logo2}>Aplikasi Belajar Daring</Text>
              </>
            )}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </SafeAreaView>
      </TailwindProvider>
    );
  };
  const _keyExtractor = (item: Item) => item.title;
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    auth.completeOnboarding();
  };
  const _renderNextButton = () => {
    return (
      <View
        style={{
          alignSelf: 'stretch',
          height: 60,
          borderRadius: 2,
          borderColor: 'white',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          marginHorizontal: 20,
        }}>
        <Text style={styles.next}>SELANJUTNYA</Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View
        style={{
          alignSelf: 'stretch',
          height: 60,
          borderRadius: 2,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          marginHorizontal: 20,
        }}>
        <Text style={styles.done}>AYO MULAI</Text>
      </View>
    );
  };

      return (
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
            bottomButton
            renderNextButton={_renderNextButton}
            renderDoneButton={_renderDoneButton}
            data={data}
            dotStyle={{backgroundColor: 'rgba(255, 255, 255, .35)'}}
            onDone={() => auth.completeOnboarding()}
          />
        </View>
      );
  
}

export default Onboarding