import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../component/Logo'
import { SvgCourse, SvgComponent, SvgPlay } from '../svg/SVG';
import { Rating, AirbnbRating } from 'react-native-ratings';

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
    category: 'MENGAJI',
    title: 'Belajar Huruf Hijaiyah',
    count: '26',
  },
  {
    id: '1',
    category: 'SIRAH',
    title: 'Sejarah Nabi Muhammad',
    count: '17',
  },
  {
    id: '2',
    category: 'FIQIH',
    title: 'Tata Cara Shalat',
    count: '15',
  },
];

const ButtonItem = ({ item } : { item: Item}) => (
  <TouchableOpacity>
  <View className='flex w-24 h-24 border border-abumuda rounded items-center justify-center mr-4'>
    <SvgComponent/>
    <Text className='font-poppins-medium text-sm text-hitam mt-3'>{item.title}</Text>
  </View>
  </TouchableOpacity>
);

const CardItem = ({ item } : { item: Item2}) => (
  <View className='flex w-60 h-60 border border-abumuda rounded mr-4'>
    <Image source={require('../../assets/video.png')} className='w-60 h-28' />
    <Text className='font-poppins-medium text-xs text-hijau ml-4 mt-3'>{item.category}</Text>
    <Text className='font-poppins-medium text-base text-hitam ml-4 mt-2'>{item.title}</Text>
    <TouchableOpacity  style={{top: 88, right: 20, position: 'absolute'}}>
    <View className='w-12 h-12 rounded-full items-center justify-center bg-hijautua'>
      <Image source={require('../../assets/play.png')} className='object-fit h-3 w-3'/>
    </View>
    </TouchableOpacity>
    <View className='flex-1 flex-row items-end mx-4 mb-2'>
      <View className='flex-1 flex-row'>
      <SvgCourse size={16} color='#6E6E6E'/>
      <Text className='font-poppins-regular text-sm text-abutua ml-2 mr-auto'>{item.count} Materi</Text>
      </View>
      <View className='flex-1'>
      <AirbnbRating size={15} showRating={false} selectedColor='#FF8900' isDisabled={true}/>
      </View>
    </View> 
  </View>
);

const CardItem2 = ({ item } : { item: Item2}) => (
  <View className='flex-row h-32 rounded mr-4 my-4' key={item.id}>
    <Image source={require('../../assets/video.png')} className='h-32 w-24 rounded' />
    <View className='flex-1 h-32'>
    <Text className='font-poppins-medium text-xs text-hijau ml-4'>{item.category}</Text>
    <Text className='font-poppins-medium text-base text-hitam ml-4 mt-2'>{item.title}</Text>
    <View className='flex-1 flex-row ml-4 items-end'>
    <View className='flex-1 flex-row'>
      <SvgCourse size={16} color='#6E6E6E'/>
      <Text className='font-poppins-regular text-sm text-abutua ml-2'>{item.count} Materi</Text>
      </View>
      <View className='flex-1 flex-row'>
      <AirbnbRating size={15} showRating={false} selectedColor='#FF8900' isDisabled={true} count={1}/>
      <Text className='font-poppins-regular text-sm text-abutua ml-2'>3.6</Text>
      </View>
      </View>
    </View>

  </View>
);

type Item = typeof DATA[0]
type Item2 = typeof DATA2[0]

const Pelajaran = () => {
  
  return (
    <SafeAreaView className='flex-1'>
        <ScrollView className='pt-5 pb-20 bg-white' contentContainerStyle={{ flexGrow: 1 }}>
      <TextInput placeholder='Cari Pelajaran' className='border-abusedang border rounded h-14 font-poppins-regular text-sm px-5 mx-5' placeholderTextColor='#D1D1D1'></TextInput>
      <FlatList
        data={DATA}
        renderItem={ButtonItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='flex-grow-0 mt-5'
        contentContainerStyle={{paddingLeft: 20, paddingRight: 4}} 
      />
      <View className='flex-row items-center mt-5 mx-5'>
        <Text className='font-poppins-semi-bold text-lg text-hitam mr-auto flex-1'>46 Pelajaran Ditemukan</Text>
      </View>
      <View className='p-5'>
        {DATA2.map(function(item, i){
          return <CardItem2 item={item} key={i}/>
        })}
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Pelajaran