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
import {SvgBack, SvgArrowBot, SvgThumb1, SvgSend, SvgReply} from '../svg/SVG';
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
        nama: 'Ade Muhammad',
        text: 'Saya baru saja menyelesaikan Materi Belajar Tajwid lengkap,',
        like: '45',
        reply: '0',
        top_reply_name: '',
        top_reply: '',
    },
    {
        id: '2',
        nama: 'Siti Aisyah',
        text: 'Saya masih bingung tentang perbedaan Idzhar dan Idgham, Pak Ustadz?',
        like: '45',
        reply: '0',
        top_reply_name: 'Ustadz Imanudin',
        top_reply:
            'apabila nun mati atau tanwin bertemu dengan alif, ha, ha, kho, ain, ghoin maka hukum tazwidnya adalah izhar. apabila nun mati atau tanwin bertemu dengan nun. mim, wau, ya maka hukun tazwidnya adalah idgham bighunnah',
    },
    {
        id: '3',
        nama: 'Ujang Asep',
        text: 'Terima kasih atas Ilmunya Pak Ustadz, Sangat bermanfaat sekali dalam mengaji.',
        like: '4',
        reply: '0',
        top_reply_name: '',
        top_reply: '',
    },
];

const HeaderItem = () => (
    <View className="absolute flex-row items-center border-b-1 border-abumuda top-0 pt-2 px-5 bg-white">
        <TouchableOpacity>
            <SvgBack />
        </TouchableOpacity>
        <View className="flex-1  h-16 border-abumuda justify-center ml-4">
            <Text className="font-poppins-semi-bold text-xl text-hitam">
                Percakapan
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
    <View className="absolute bottom-0 bg-white flex flex-1 flex-row stretch p-5">
        <TouchableOpacity style={{flex: 1}}>
            <View className="h-14 bg-hijau rounded-sm items-center justify-center">
                <Text className="font-poppins-semi-bold text-base text-white">
                    TAMBAH DISKUSI
                </Text>
            </View>
        </TouchableOpacity>
    </View>
);
const CardItem2 = ({item}: {item: Item2}) => (
    <View className="flex-row py-4">
        <View>
            <Image
                source={require('../../assets/profile.png')}
                className="h-9 w-9 rounded"
            />
        </View>
        <View className="flex-1 ml-5">
            <Text className="font-poppins-medium text-base text-hitam">
                {item.nama}
            </Text>
            <Text className="font-poppins-regular text-sm text-hitam mt-2">
                {item.text}
            </Text>
            <View className="flex-row mt-6">
                <View className="flex-1 flex-row items-center">
                    <SvgThumb1 />
                    <Text className="font-poppins-medium text-sm text-hitam ml-2">
                        {item.like} Suka
                    </Text>
                </View>
                <View className="flex-1 flex-row items-center">
                    <SvgReply />
                    <Text className="font-poppins-medium text-sm text-hitam ml-2">
                        {item.reply} Balasan
                    </Text>
                </View>
            </View>
        </View>
    </View>
);

type Item = typeof DATA[0];
type Item2 = typeof DATA2[0];

const Percakapan = () => {
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

export default Percakapan;
