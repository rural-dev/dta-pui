import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../component/Logo';
import {useAuth} from '../../contexts/Auth';

export default function Login({navigation}: {navigation: any}) {
    const auth = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView className="flex-1">
            <ScrollView
                className="px-7 py-10"
                contentContainerStyle={{flexGrow: 1}}>
                <View className="items-center">
                    <Logo />
                </View>
                <Text className="font-poppins-semi-bold text-lg pt-7 text-hitam">
                    Masuk
                </Text>
                <Text className="font-poppins-regular text-sm text-abutua pt-3">
                    Masukan detail login dibawah ini untuk mulai belajar di
                    Aplikasi!
                </Text>
                <TextInput
                    onChangeText={text => setUsername(text)}
                    value={username}
                    placeholder="Alamat Email"
                    className="border-abusedang border-2 rounded h-14 font-poppins-regular text-sm px-5 mt-12"
                    placeholderTextColor="#D1D1D1"></TextInput>
                <TextInput
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                    className="border-abusedang border-2 rounded h-14 font-poppins-regular text-sm px-5 mt-3"
                    placeholderTextColor="#D1D1D1"></TextInput>
                <TouchableOpacity
                    onPress={() =>
                        auth.signIn({username: username, password: password})
                    }>
                    <View className="bg-hijau h-14 mt-6 rounded-sm items-center justify-center">
                        <Text className="font-poppins-semi-bold text-md text-white">
                            MASUK
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text className="font-poppins-regular text-xs text-abutua pt-3">
                    Lupa Password?
                    <Text className="font-poppins-semi-bold text-xs text-hijau pt-3">
                        {' '}
                        Reset Password{' '}
                    </Text>
                </Text>

                <Text className="font-poppins-regular text-sm text-abutua text-center pt-10">
                    Belum punya Akun?
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <View className="bg-abuhijau h-14 mt-6 mb-16 rounded-sm items-center justify-center">
                        <Text className="font-poppins-semi-bold text-md text-hijau">
                            BUAT AKUN BARU
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
