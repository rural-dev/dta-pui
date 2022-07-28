import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';

import {useAuth} from '../contexts/Auth';

import Register from '../src/screen/Register';
import Login from '../src/screen/Login';
import HomeStack from '../src/stack/HomeStack';
import Pesan from '../src/screen/Pesan';
import DetailPelajaran from '../src/screen/DetailPelajaran';
import Prestasi from '../src/screen/Prestasi';
import Percakapan from '../src/screen/Percakapan';
import SubMateri from '../src/screen/SubMateri';
import Latihan from '../src/screen/Latihan';
import Pertanyaan from '../src/screen/Pertanyaan';
import HasilLatihan from '../src/screen/HasilLatihan';
import Onboarding from '../Onboarding';
import Starting from '../src/screen/Starting';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="HomeStack" component={HomeStack} />
            <Stack.Screen name="DetailPelajaran" component={DetailPelajaran} />
            <Stack.Screen name="Prestasi" component={Prestasi} />
            <Stack.Screen name="Percakapan" component={Percakapan} />
            <Stack.Screen name="SubMateri" component={SubMateri} />
            <Stack.Screen name="Latihan" component={Latihan} />
            <Stack.Screen name="Pertanyaan" component={Pertanyaan} />
            <Stack.Screen name="HasilLatihan" component={HasilLatihan} />
            <Stack.Screen name="Chat" component={Pesan} />
        </Stack.Navigator>
    );
};

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};

export const Router = () => {
    const {authData, loading, onboarding, starting} = useAuth();
    if (starting) {
        //You can see the component implementation at the repository
        return <Starting />;
    } else if (onboarding) {
        return <Onboarding />;
    } else {
        return (
            <>
                <NavigationContainer>
                    {authData?.access_token ? <AppStack /> : <AuthStack />}
                </NavigationContainer>
                <Modal
                    transparent={true}
                    animationType={'none'}
                    visible={loading}
                    onRequestClose={() => {
                        console.log('close modal');
                    }}>
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator animating={loading} />
                        </View>
                    </View>
                </Modal>
            </>
        );
    }
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
