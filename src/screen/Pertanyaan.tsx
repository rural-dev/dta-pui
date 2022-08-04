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
import React, {useEffect, useState} from 'react';
import Logo from '../component/Logo';
import {SvgBack, SvgMenu, SvgClock, SvgSend, SvgCourse} from '../svg/SVG';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {api} from '../../constant/Api';
import {useFetch} from '../../hooks/Fetch';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

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

const HeaderItem = ({pertanyaan}: {pertanyaan: string}) => (
    <View className="flex-row border-b-1 border-abumuda pt-2 px-5 bg-white">
        <View className="flex-1 items-center justify-center">
            <Text className="font-poppins-regular text-base text-abutua py-8">
                {pertanyaan}
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
const CardItem2 = ({item, jawaban, setJawaban, hasil}) => {
    if (item.pk == jawaban && !hasil) {
        return (
            <View className="flex-row py-2 px-8 items-center">
                <TouchableOpacity style={{flex: 1}}>
                    <View className="flex-1 border-2 bg-abumuda py-2 px-5 rounded-full border-hijau">
                        <Text className="font-poppins-regular text-base text-hijau">
                            {item.pilihan}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    } else if (hasil && item.benar == true) {
        return (
            <View className="flex-row py-2 px-8 items-center">
                <View className="flex-1 bg-hijau py-2 px-5 rounded-full ">
                    <Text className="font-poppins-regular text-base text-white">
                        {item.pilihan}
                    </Text>
                </View>
            </View>
        );
    } else if (hasil && item.pk == jawaban) {
        return (
            <View className="flex-row py-2 px-8 items-center">
                <View className="flex-1 border-oranye border-2 py-2 px-5 rounded-full bg-abumuda ">
                    <Text className="font-poppins-regular text-base text-oranye">
                        {item.pilihan}
                    </Text>
                </View>
            </View>
        );
    } else {
        return (
            <View className="flex-row py-2 px-8 items-center">
                <TouchableOpacity
                    disabled={hasil}
                    style={{flex: 1}}
                    onPress={() => setJawaban(item.pk)}>
                    <View className="flex-1 bg-abumuda py-2 px-5 rounded-full ">
                        <Text className="font-poppins-regular text-base text-abutua">
                            {item.pilihan}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};

type Item = typeof DATA[0];
type Item2 = typeof DATA2[0];

const Pertanyaan = ({route, navigation}: {route: any; navigation: any}) => {
    const {id} = route.params;
    const url = `${api.Submateri}${id}/`;
    const {loading, data} = useFetch(url);
    const [benar, setBenar] = useState(0);
    const [num, setNum] = useState(1);
    const [soal, setSoal] = useState({});
    const [jawaban, setJawaban] = useState(null);
    const [hasil, setHasil] = useState(false);
    useEffect(() => {
        if (data.soal) {
            if (data.soal.length >= num) {
                setSoal(data.soal[num - 1]);
                console.log(soal);
            }
        }
    }, [data]);
    const jawab = () => {
        setHasil(true);
        if (soal?.pilihanganda.find(e => e.pk == jawaban).benar == true) {
            setBenar(benar + 1);
        }
    };
    const nextQuestion = () => {
        setNum(num + 1);
        setHasil(false);
        setJawaban(null);
        setSoal(data.soal[num]);
    };
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row p-1 bg-hijau">
                <View className="flex-row flex-1 bg-hijau py-6 px-4">
                    <SvgCourse size={20} color="#FFFFFF" />
                    <Text className="font-poppins-medium text-sm text-white ml-2">
                        Soal: {num} dari {data?.soal?.length}
                    </Text>
                </View>
                <View className="flex-row flex-1 bg-hijau py-6 px-4">
                    <SvgClock size={16} color="#FFFFFF" />
                    <Text className="font-poppins-medium text-sm text-white ml-2">
                        Waktu: {data.menit} menit
                    </Text>
                </View>
            </View>
            <View className="flex-row border-b-1 border-abumuda pt-2 px-5 bg-white">
                <View className="flex-1 items-center justify-center">
                    <Text className="font-poppins-regular text-base text-abutua py-8">
                        {soal.pertanyaan}
                    </Text>
                </View>
            </View>
            <View className="px-5">
                {soal?.pilihanganda &&
                    soal.pilihanganda.map(function (item, i) {
                        return (
                            <CardItem2
                                key={i}
                                item={item}
                                jawaban={jawaban}
                                setJawaban={setJawaban}
                                hasil={hasil}
                            />
                        );
                    })}
            </View>
            {hasil ? (
                <View className="flex-row py-8 px-8 items-center">
                    <TouchableOpacity
                        style={{flex: 1, marginLeft: 20}}
                        onPress={
                            data.soal.length == num
                                ? () => {
                                      navigation.pop();
                                      navigation.navigate('HasilLatihan', {
                                          benar: benar,
                                          data: data,
                                      });
                                  }
                                : nextQuestion
                        }>
                        <View className="flex-1 bg-hijau py-4 px-5 rounded-sm items-center">
                            <Text className="font-poppins-semi-bold text-base text-white">
                                {data.soal.length == num
                                    ? 'SELESAI'
                                    : 'SELANJUTNYA'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View className="flex-row py-8 px-8 items-center">
                    <TouchableOpacity style={{flex: 1}} onPress={nextQuestion}>
                        <View className="flex-1 bg-oranye py-4 px-5 rounded-sm items-center">
                            <Text className="font-poppins-semi-bold text-base text-white">
                                LEWATI
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flex: 1, marginLeft: 20}}
                        onPress={jawab}>
                        <View className="flex-1 bg-hijau py-4 px-5 rounded-sm items-center">
                            <Text className="font-poppins-semi-bold text-base text-white">
                                JAWAB
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            {/* <FooterItem/> */}
        </SafeAreaView>
    );
};

export default Pertanyaan;
