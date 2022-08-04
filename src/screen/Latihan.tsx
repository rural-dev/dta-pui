import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {SvgCourse, SvgClock} from '../svg/SVG';

const Latihan = ({route, navigation}: {route: any; navigation: any}) => {
    const {data} = route.params;
    return (
        <View className="flex-1 items-center py-20 bg-white">
            <Text className="font-poppins-semi-bold text-xl text-hitam mb-10">
                {data.name}
            </Text>
            <View className="flex-row">
                <View className="flex-1 m-8 p-5 h-32 border border-abumuda rounded-sm bg-hijau">
                    <Text className="font-poppins-regular text-base text-white">
                        Bersiap{' '}
                        <Text className="font-poppins-medium text-base">
                            {data.name}
                        </Text>
                    </Text>
                    <View className="flex-1 flex-row items-end">
                        <View className="flex-1 flex-row">
                            <SvgCourse size={16} color="#FFFFFF" />
                            <Text className="font-poppins-regular text-sm text-white ml-2">
                                {data.total_soal} Pertanyaan
                            </Text>
                        </View>
                        <View className="flex-row">
                            <SvgClock size={16} color="#FFFFFF" />
                            <Text className="font-poppins-regular text-sm text-white ml-2">
                                {data.menit} menit
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex-row py-2 px-8 items-center">
                <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => navigation.pop()}>
                    <View className="flex-1 bg-oranye py-4 px-5 rounded-sm items-center">
                        <Text className="font-poppins-semi-bold text-base text-white">
                            BATAL
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex: 1, marginLeft: 20}}
                    onPress={() => {
                        navigation.pop();
                        navigation.navigate('Pertanyaan', {id: data.pk});
                    }}>
                    <View className="flex-1 bg-hijau py-4 px-5 rounded-sm items-center">
                        <Text className="font-poppins-semi-bold text-base text-white">
                            MULAI
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Latihan;
