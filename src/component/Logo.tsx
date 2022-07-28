import {View, Text, Image} from 'react-native';
import React from 'react';

const Logo = () => {
    return (
        <View className="flex-row">
            <Image
                source={require('../../assets/logo-pui-2.png')}
                style={{height: 60, width: 63}}
            />
            <View className="flex flex-col mx-4 items-center justify-center">
                <View>
                    <Text className="font-poppins-bold text-3xl text-hijau -mb-1">
                        DTA PUI
                    </Text>
                </View>
                <View>
                    <Text className="font-poppins-bold text-xl text-hijau -mt-1">
                        Karangsari
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Logo;
