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
  <View className='flex-row w-40 h-14 border border-abumuda rounded items-center justify-center mr-4'>
    <SvgComponent/>
    <Text className='font-poppins-medium text-base text-hitam ml-3'>{item.title}</Text>
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

const CardItem2 = ({ item, navigation } : { item: Item2, navigation: any}) => (
  <View className='flex-row h-32 rounded mr-4 my-4' key={item.id}>
    <TouchableOpacity onPress={() => navigation.navigate('DetailPelajaran')}>
    <Image source={require('../../assets/video.png')} className='h-32 w-24 rounded' />
    </TouchableOpacity>
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

const Home = ({navigation} : {navigation : any}) => {
  
  return (
    <SafeAreaView className='flex-1 bg-white'>
        <ScrollView className='pt-5 pb-28' contentContainerStyle={{ flexGrow: 1 }}>
      <View className='px-5'> 
      <Logo/>
      <TextInput placeholder='Cari Pelajaran' className='border-abusedang border rounded h-14 font-poppins-regular text-sm px-5 mt-7' placeholderTextColor='#D1D1D1'></TextInput>

      <Text className='font-poppins-semi-bold text-lg pt-7 text-hitam mb-5'>Kategori</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={ButtonItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='flex-grow-0'
        contentContainerStyle={{paddingLeft: 20, paddingRight: 4}} 
      />
        <View className='p-5 flex-row items-center'>
          <View className='flex-1'>
          <Text className='font-poppins-semi-bold text-lg text-hitam mr-auto'>Pelajaran Populer</Text>
          </View>
          <Text className='font-poppins-medium text-sm text-hijau text-end'>Lihat Semua</Text>
        </View>
      <FlatList
        data={DATA2}
        renderItem={CardItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='flex-grow-0'
        contentContainerStyle={{paddingLeft: 20, paddingRight: 4}} 
      />
      <View className='px-5'>
      <Text className='font-poppins-semi-bold text-lg pt-7 text-hitam'>Pelajaran Terbaru</Text>

      </View>
      <View className='p-5'>
        {DATA2.map(function(item, i){
          return <CardItem2 item={item} key={i} navigation={navigation}/>
        })}
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home