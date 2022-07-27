import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../component/Logo'
import { SvgCourse, SvgComponent, SvgPlay, SvgPencil, SvgClock } from '../svg/SVG';
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
  
  <View className='flex-row h-32 rounded mr-4 my-4' key={item.id}>
    <Text className='font-poppins-medium text-base text-hitam ml-3'>{item.title}</Text>
  </View>
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

const Profile = ({navigation}: {navigation: any}) => {
  
  return (
    <SafeAreaView className='flex-1'>
        <ScrollView className='bg-white' contentContainerStyle={{ flexGrow: 1 }}>
        <Image source={require('../../assets/bg-profile.png')} className='h-44' />
        <View className='absolute h-28 w-28 items-center justify-center rounded bg-white top-36 left-5'>
          <Image source={require('../../assets/profile.png')} className='h-24 w-24' />
        </View>
        <TouchableOpacity style={{position: 'absolute', top: 155, right: 32, elevation: 3}}>
        <View className='h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl'>
          <SvgPencil/>
        </View>
        </TouchableOpacity>
        <Text className='font-poppins-medium text-xl text-hitam ml-36 mt-6'>Muhammad Dzikri</Text>
        <Text className='font-poppins-regular text-sm text-hitam ml-36'>Siswa Kelas 1</Text>
        <Text className='font-poppins-semi-bold text-lg p-5 mt-4 text-hitam'>Pesan & Kesan</Text>
        <Text className='font-poppins-regular text-sm px-5 pb-8 text-hitam'>Saya senang sekali belajar di MD Karangsari karena Guru gurunya baik dan juga banyak teman.</Text>
        <View className='px-5 flex-row items-center'>
          <View className='flex-1'>
          <Text className='font-poppins-semi-bold text-lg text-hitam mr-auto'>Prestasi</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Prestasi')}>
          <Text className='font-poppins-medium text-sm text-hijau text-end'>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <View className='m-5 p-5 h-32 flex-col border border-abumuda rounded-sm'>
        <View  className='flex-row mb-4'>
          <View className='flex-1'>
            <Text className='font-poppins-regular text-base'>Menyelesaikan <Text className='font-poppins-medium text-base text-hitam'>Belajar Tajwid (Lengkap)</Text></Text>
          </View>
          <Image source={require('../../assets/medal.png')} resizeMode='contain' style={{height: 56, width: 56}} />

        </View>
        <View className='flex-row'>
        <View className='flex-1 flex-row'>
        <SvgCourse size={16} color='#6E6E6E'/>
        <Text className='font-poppins-regular text-sm text-abutua ml-2'>25 Materi</Text>
        </View>
        <View className='flex-row'>
        <SvgClock size={16} color='#6E6E6E'/>
        <Text className='font-poppins-regular text-sm text-abutua ml-2'>4h 24min</Text>
        </View>
        </View>
        </View>
        <Text className='font-poppins-semi-bold text-lg p-5 text-hitam'>Sedang Mempelajari</Text>

        <View className='px-5'>
        {DATA2.map(function(item, i){
          return <CardItem2 item={item} key={i}/>
        })}
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile