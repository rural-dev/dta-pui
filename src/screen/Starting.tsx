import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

const Starting = () => {
  return (
          <View className='flex-1 bg-hijau items-center justify-center'>
            <Image
              source={require('../../assets/logo-pui-2.png')}
              style={{width: 150, height: 143}}
            />
            <Text className='text-3xl font-poppins-bold text-white mt-6'>DTA PUI Karangsari</Text>
          </View>
  )
}

export default Starting