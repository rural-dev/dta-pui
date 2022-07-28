import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import React from 'react';
import Logo from '../component/Logo';
import {SvgBack, SvgArrowBot, SvgCourse, SvgSend, SvgClock} from '../svg/SVG';
import {Rating, AirbnbRating} from 'react-native-ratings';

const DATA = [
    {
        id: '0',
        title: 'Mengaji',
    },
    {
        id: '1',
        title: 'Sirah',
    },
    {
        id: '2',
        title: 'Fiqih',
    },
];

const DATA2 = [
    {
        id: '0',
        category: 'you',
        text: 'Selamat sore Pak Ustadz, saya mau bertanya?',
        time: '4.30 AM',
    },
    {
        id: '1',
        category: 'me',
        text: 'Baik Nak, Silahkan bertanya disini saja.',
        time: '4.34 AM',
    },
    {
        id: '2',
        category: 'you',
        text: 'Terima Kasih pak Ustadz',
        time: '4.40 AM',
    },
    {
        id: '3',
        category: 'me',
        text: 'Sama Sama',
        time: '4.52 AM',
    },
    {
        id: '4',
        category: 'you',
        text: 'Terima Kasih pak Ustadz',
        time: '4.40 AM',
    },
    {
        id: '5',
        category: 'me',
        text: 'Sama Sama',
        time: '4.52 AM',
    },
];

const HeaderItem = () => (
    <View className="absolute flex-row items-center border-b-1 border-abumuda top-0 pt-2 px-5 bg-white">
        <TouchableOpacity>
            <SvgBack />
        </TouchableOpacity>
        <View className="flex-1  h-16 border-abumuda justify-center ml-4">
            <Text className="font-poppins-semi-bold text-xl text-hitam">
                Prestasi
            </Text>
        </View>
        <View className="flex-row items-center">
            <Text className="font-poppins-medium text-sm text-hijau mr-2">
                Terbaru
            </Text>
            <SvgArrowBot />
        </View>
    </View>
);

const FooterItem = () => (
    <View className="absolute bottom-0 bg-white flex flex-1 flex-row stretch">
        <View className="flex-row items-center m-1 p-1 border-b-1 border-abumuda border rounded bg-white flex-1">
            <View className="flex-1 h-16 justify-center">
                <TextInput
                    placeholder="Tulis Pesan"
                    className="h-14 font-poppins-regular text-sm px-5"
                    placeholderTextColor="#D1D1D1"></TextInput>
            </View>
            <View className="w-16 ">
                <TouchableOpacity>
                    <View className="w-12 h-12 bg-abuhijau items-center justify-center">
                        <SvgSend />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
const CardItem2 = ({item}: {item: Item2}) => (
    <View className="m-5 p-5 h-32 flex-col border border-abumuda rounded-sm">
        <View className="flex-row mb-4">
            <View className="flex-1">
                <Text className="font-poppins-regular text-base">
                    Menyelesaikan{' '}
                    <Text className="font-poppins-medium text-base text-hitam">
                        Belajar Tajwid (Lengkap)
                    </Text>
                </Text>
            </View>
            <Image
                source={require('../../assets/medal.png')}
                resizeMode="contain"
                style={{height: 56, width: 56}}
            />
        </View>
        <View className="flex-row">
            <View className="flex-1 flex-row">
                <SvgCourse size={16} color="#6E6E6E" />
                <Text className="font-poppins-regular text-sm text-abutua ml-2">
                    25 Materi
                </Text>
            </View>
            <View className="flex-row">
                <SvgClock size={16} color="#6E6E6E" />
                <Text className="font-poppins-regular text-sm text-abutua ml-2">
                    4h 24min
                </Text>
            </View>
        </View>
    </View>
);

type Item = typeof DATA[0];
type Item2 = typeof DATA2[0];

const Prestasi = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                data={DATA2}
                renderItem={CardItem2}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                className="flex-grow-0"
                contentContainerStyle={{paddingVertical: 80}}
            />
            <HeaderItem />
        </SafeAreaView>
    );
};

export default Prestasi;
