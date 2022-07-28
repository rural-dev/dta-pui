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
import {SvgBack, SvgMenu, SvgClock, SvgSend, SvgCourse} from '../svg/SVG';
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
        id: '1',
        category: '0',
        text: 'Wajib',
        time: '4.34 AM',
    },
    {
        id: '2',
        category: '1',
        text: 'Sunnah',
        time: '4.40 AM',
    },
    {
        id: '3',
        category: '0',
        text: 'Mubah',
        time: '4.52 AM',
    },
    {
        id: '4',
        category: '0',
        text: 'Makruh',
        time: '4.40 AM',
    },
];

const HeaderItem = () => (
    <View className="flex-row border-b-1 border-abumuda pt-2 px-5 bg-white">
        <View className="flex-1 items-center justify-center">
            <Text className="font-poppins-regular text-base text-abutua py-8">
                Apakah hukumnya menggunakan tajwid dalam membaca Al-Quran?
            </Text>
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
    item.category == '1' ? (
        <View className="flex-row py-2 px-8 items-center">
            <TouchableOpacity style={{flex: 1}}>
                <View className="flex-1 bg-hijau py-2 px-5 rounded-full ">
                    <Text className="font-poppins-regular text-base text-white">
                        {item.text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    ) : (
        <View className="flex-row py-2 px-8 items-center">
            <TouchableOpacity style={{flex: 1}}>
                <View className="flex-1 bg-abumuda py-2 px-5 rounded-full ">
                    <Text className="font-poppins-regular text-base text-abutua">
                        {item.text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

type Item = typeof DATA[0];
type Item2 = typeof DATA2[0];

const Pertanyaan = ({navigation}: {navigation: any}) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="absolute flex-row flex-1 p-1 bg-hijau">
                <View className="flex-row flex-1 bg-hijau py-6 px-4">
                    <SvgCourse size={20} color="#FFFFFF" />
                    <Text className="font-poppins-medium text-sm text-white ml-2">
                        Soal: 1 dari 25
                    </Text>
                </View>
                <View className="flex-row flex-1 bg-hijau py-6 px-4">
                    <SvgClock size={16} color="#FFFFFF" />
                    <Text className="font-poppins-medium text-sm text-white ml-2">
                        Waktu: 30:28
                    </Text>
                </View>
            </View>
            <FlatList
                data={DATA2}
                renderItem={CardItem2}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                className="flex-grow-0"
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 90,
                }}
                ListHeaderComponent={HeaderItem}
            />
            <View className="flex-row py-2 px-8 items-center">
                <TouchableOpacity style={{flex: 1}}>
                    <View className="flex-1 bg-oranye py-4 px-5 rounded-sm items-center">
                        <Text className="font-poppins-semi-bold text-base text-white">
                            LEWATI
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex: 1, marginLeft: 20}}
                    onPress={() => navigation.navigate('HasilLatihan')}>
                    <View className="flex-1 bg-hijau py-4 px-5 rounded-sm items-center">
                        <Text className="font-poppins-semi-bold text-base text-white">
                            JAWAB
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <FooterItem/> */}
        </SafeAreaView>
    );
};

export default Pertanyaan;
