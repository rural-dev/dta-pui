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
import YoutubePlayer from 'react-native-youtube-iframe';
import {api} from '../../constant/Api';
import {useFetch} from '../../hooks/Fetch';

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
        pk: '0',
        type: 'video',
        title: '',
        text: '',
        video: 'Tav3JVhojMw',
        image: '',
        audio: '',
    },
    {
        id: '1',
        type: 'h1',
        title: 'Pengertian Idzhar',
        text: '',
        video: '',
        image: '',
        audio: '',
    },
    {
        id: '2',
        type: 'p',
        title: '',
        text: 'Idzhar menurut bahasa artinya al-bayan [jelas]. Sedangkan menurut istilah ilmu tajwid, idzhar memiliki beberapa definisi.',
        video: '',
        image: '',
        audio: '',
    },
    {
        id: '3',
        type: 'p',
        title: '',
        text: 'Dalam kitab nihayatul qaulil mufid disebutkan bahwa idzhar adalah “mengeluarkan huruf dari makhrajnya tanpa gunnah [dengung] pada huruf yang di-idzhar-kan”.',
        video: '',
        image: '',
        audio: '',
    },
    {
        id: '4',
        type: 'img',
        title: '',
        text: '',
        video: '',
        image: 'https://nubada.id/wp-content/uploads/2020/10/image-1.png',
        audio: '',
    },
];

const HeaderItem = ({title}: {title: string}) => (
    <View className="absolute flex-row items-center border-b-1 border-abumuda top-0 pt-2 px-5 bg-white">
        <TouchableOpacity>
            <SvgBack />
        </TouchableOpacity>
        <View className="flex-1  h-16 border-abumuda justify-center ml-4">
            <Text className="font-poppins-semi-bold text-xl text-hitam">
                {title}
            </Text>
        </View>
    </View>
);

const FooterItem = ({navigation}: {navigation: any}) => (
    <View className="absolute bottom-0 bg-white flex flex-1 flex-row stretch p-5">
        <TouchableOpacity
            style={{flex: 1}}
            onPress={() => navigation.navigate('Percakapan')}>
            <View className="h-14 bg-oranye rounded-sm items-center justify-center">
                <Text className="font-poppins-semi-bold text-base text-white">
                    BERTANYA
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={{flex: 1, marginLeft: 20}}
            onPress={() => navigation.pop()}>
            <View className="h-14 bg-hijau rounded-sm items-center justify-center">
                <Text className="font-poppins-semi-bold text-base text-white">
                    SELESAI
                </Text>
            </View>
        </TouchableOpacity>
    </View>
);
const CardItem2 = ({item}: {item: Item2}) => {
    if (item.type == 'h1') {
        return (
            <Text className="font-poppins-medium text-lg text-hitam mt-3">
                {item.title}
            </Text>
        );
    } else if (item.type == 'p') {
        return (
            <Text className="font-poppins-regular text-sm text-abutua mt-3">
                {item.text}
            </Text>
        );
    } else if (item.type == 'img') {
        return (
            <Image
                source={{uri: item.image}}
                style={{height: 100, width: 300, marginTop: 12}}
            />
        );
    } else if (item.type == 'video') {
        return (
            <View>
                <YoutubePlayer height={200} play={false} videoId={item.video} />
            </View>
        );
    } else {
        return <></>;
    }
};

type Item = typeof DATA[0];
type Item2 = typeof DATA2[0];

const SubMateri = ({route, navigation}: {route: any; navigation: any}) => {
    const {id} = route.params;
    const url = `${api.Submateri}${id}/`;
    const {loading, data} = useFetch(url);
    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                data={data.isimateri}
                renderItem={({item, index}) => (
                    <CardItem2 item={item} key={index} />
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                className="flex-grow-0"
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 80,
                }}
            />
            <HeaderItem title={data.name} />
            <FooterItem navigation={navigation} />
        </SafeAreaView>
    );
};

export default SubMateri;
