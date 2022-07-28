import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import Logo from '../component/Logo';

export default function Register({navigation}: {navigation: any}) {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView
                className="px-7 py-10"
                contentContainerStyle={{flexGrow: 1}}>
                <View className="items-center">
                    <Logo />
                </View>
                <Text className="font-poppins-semi-bold text-lg pt-7 text-hitam">
                    Buat Akun Baru
                </Text>
                <Text className="font-poppins-regular text-sm text-abutua pt-3">
                    Buat Akun untuk mengakses Materi Pelajaran, mengikuti Kuis
                    dan melihat progress hasil pembelajaran!
                </Text>
                <TextInput
                    placeholder="Nama Siswa"
                    className="border-abusedang border-2 rounded h-14 font-poppins-regular text-sm px-5 mt-6"
                    placeholderTextColor="#D1D1D1"></TextInput>
                <TextInput
                    placeholder="Alamat Email"
                    className="border-abusedang border-2 rounded h-14 font-poppins-regular text-sm px-5 mt-3"
                    placeholderTextColor="#D1D1D1"></TextInput>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    className="border-abusedang border-2 rounded h-14 font-poppins-regular text-sm px-5 mt-3"
                    placeholderTextColor="#D1D1D1"></TextInput>
                <TextInput
                    placeholder="Ulangi Password"
                    secureTextEntry={true}
                    className="border-abusedang border-2 rounded h-14 font-poppins-regular text-sm px-5 mt-3"
                    placeholderTextColor="#D1D1D1"></TextInput>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View className="bg-hijau h-14 mt-6 rounded-sm items-center justify-center">
                        <Text className="font-poppins-semi-bold text-md text-white">
                            BUAT AKUN SISWA
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text className="font-poppins-regular text-xs text-abutua pt-3">
                    Dengan mengklik berarti anda telah menyetujui
                    <Text className="font-poppins-semi-bold text-xs text-hijau pt-3">
                        {' '}
                        syarat{' '}
                    </Text>
                    dan
                    <Text className="font-poppins-semi-bold text-xs text-hijau pt-3">
                        {' '}
                        ketentuan{' '}
                    </Text>
                </Text>

                <Text className="font-poppins-regular text-sm text-abutua text-center pt-10">
                    Sudah punya Akun?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View className="bg-abuhijau h-14 mt-6 mb-16 rounded-sm items-center justify-center">
                        <Text className="font-poppins-semi-bold text-md text-hijau">
                            MASUK
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
