import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '0',
    title: 'Muhammad Dzikri',
    text: 'Selamat sore Pak Ustadz, saya mau bertanya?',
    time: '4.30 AM',
  },
  {
    id: '1',
    title: 'Ustadz Imanudin',
    text: 'Baik Nak, Silahkan bertanya disini saja.',
    time: '4.34 AM',
  },
  {
    id: '2',
    title: 'Siti Maesarok',
    text: 'Terima Kasih pak Ustadz',
    time: '4.40 AM',
  },
  {
    id: '3',
    title: 'Agus Setiawan',
    text: 'Sama Sama',
    time: '4.52 AM',
  },
  {
    id: '4',
    title: 'Zahra Nadia',
    text: 'Terima Kasih pak Ustadz',
    time: '4.40 AM',
  },
  {
    id: '5',
    title: 'Ustadah Nia',
    text: 'Sama Sama',
    time: '4.52 AM',
  },
];

type Item = typeof DATA[0]

const PesanItem = ({ item, navigation } : { item: Item, navigation: any}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <View className='flex-row border-b-1 border-abumuda pt-4 px-5 bg-white mb-1'>
            <Image source={require('../../assets/profile.png')} style={{height:37, width: 37}}/>
            <View className='flex-1 h-16 ml-4'>
            <Text className='font-poppins-medium text-base text-hitam'>{item.title}</Text>
            <Text className='font-poppins-regular text-sm text-abusedang'>{item.text}</Text>
            </View>
            <View className='items-start'>
            <Text className='font-poppins-regular text-xs text-abusedang'>{item.time}</Text>
            </View>
            </View>
        </TouchableOpacity>
)};

const PesanList = ({ navigation }: {navigation: any}) => {
  
  return (
    <SafeAreaView className='flex-1 bg-white'> 
    
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
            <PesanItem item={item} navigation={navigation} />
          )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        className='flex-grow-0'
        contentContainerStyle={{paddingVertical: 20}} 
      />
    </SafeAreaView>
  )
}

export default PesanList