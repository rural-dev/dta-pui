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
import {SvgBack, SvgMenu, SvgPlay, SvgSend} from '../svg/SVG';
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
        <Image
            source={require('../../assets/profile.png')}
            style={{height: 37, width: 37, marginLeft: 20}}
        />
        <View className="flex h-16 border-abumuda justify-center ml-4">
            <Text className="font-poppins-medium text-base text-hitam">
                Muhammad Dzikri
            </Text>
            <Text className="font-poppins-regular text-xs text-hijaumuda">
                ONLINE
            </Text>
        </View>
        <View className="flex-1 items-end">
            <SvgMenu />
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
const CardItem2 = ({item}: {item: Item2}) =>
    item.category == 'me' ? (
        <View className="py-4 items-end">
            <View className="bg-hijau w-60 p-4 ">
                <Text className="font-poppins-regular text-base text-white">
                    {item.text}
                </Text>
                <Text className="font-poppins-regular text-xs text-white mt-4">
                    {item.time}
                </Text>
            </View>
            <Image
                source={require('../../assets/arrow-2.png')}
                style={{height: 11, width: 22}}
            />
        </View>
    ) : (
        <View className="py-4">
            <Image
                source={require('../../assets/arrow.png')}
                style={{height: 11, width: 22}}
            />

            <View className="bg-abumuda w-60 p-4">
                <Text className="font-poppins-regular text-base text-hitam">
                    {item.text}
                </Text>
                <Text className="font-poppins-regular text-xs text-hitam mt-4">
                    {item.time}
                </Text>
            </View>
        </View>
    );

type Item = typeof DATA[0];
type Item2 = typeof DATA2[0];

const Pesan = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                data={DATA2}
                renderItem={CardItem2}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                className="flex-grow-0"
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 80,
                }}
            />
            <HeaderItem />
            <FooterItem />
        </SafeAreaView>
    );
};

export default Pesan;
