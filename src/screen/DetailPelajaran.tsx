import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../component/Logo'
import { SvgCourse, SvgBookmark, SvgPlay, SvgPencil, SvgClock } from '../svg/SVG';
import { Rating, AirbnbRating } from 'react-native-ratings';
import LinearGradient from "react-native-linear-gradient"

const DATA = [
  {
    id: '0',
    title: 'Materi Kursus',
  },
  {
    id: '1',
    title: 'Tentang',
  },
  {
    id: '2',
    title: 'Nilai',
  },
];

const DATA2 = [
  {
    id: '1',
    status: '1',
    title: 'Hukum mempelajari ilmu tajwid?',
    time: '5',
    type: '1'
  },
  {
    id: '2',
    status: '0',
    title: 'Sukun dan Tanwin',
    time: '26',
    type: '1'
  },
  {
    id: '3',
    status: '0',
    title: 'Latihan',
    time: '26',
    type: '2'
  },
  {
    id: '4',
    status: '3',
    title: 'Idgham Bigunnah',
    time: '26',
    type: '1'
  },
  {
    id: '5',
    status: '3',
    title: 'Idgham Bilagunnah',
    time: '26',
    type: '1'
  },
  {
    id: '6',
    status: '3',
    title: 'Ikhfa',
    time: '26',
    type: '1'
  }
];

const ButtonItem = ({ item } : { item: Item}) => (
  
  <View className='flex-row rounded mr-4 my-4' key={item.id}>
    <Text className='font-poppins-semi-bold text-lg text-hitam ml-3'>{item.title}</Text>
  </View>
);


const CardItem2 = ({ item, navigation } : { item: Item2, navigation: any}) => (
  item.type == '1' ?
  <View className='flex-row h-20 rounded mb-3 mx-1 items-center' key={item.id}>
    <View className='h-14 w-14 rounded-sm border-2 border-abuhijau items-center justify-center' >
        <Text className='font-poppins-medium text-lg text-hijau'>#{item.id}</Text>
    </View>
    <View className='flex-1'>
        <Text className='font-poppins-medium text-base text-hitam ml-4'>{item.title}</Text>
        <Text className='font-poppins-regular text-sm text-hitam ml-4'>{item.time} menit</Text>
    </View>
    <View className='w-14 h-14 justify-center items-center'>
        <TouchableOpacity onPress={() => navigation.navigate('SubMateri')}>
        <View className='w-12 h-12 rounded-full items-center justify-center bg-hijautua'>
        <Image source={require('../../assets/play.png')} className='object-fit h-3 w-3'/>
        </View>
        </TouchableOpacity>
    </View>
  </View> :
  <View className='flex-row h-20 rounded mb-3 mx-1 items-center' key={item.id}>
  <View className='h-14 w-14 rounded-sm border-2 border-abuhijau items-center justify-center' >
      <Text className='font-poppins-medium text-lg text-hijau'>#{item.id}</Text>
  </View>
  <View className='flex-1'>
      <Text className='font-poppins-medium text-base text-hitam ml-4'>{item.title}</Text>
      <Text className='font-poppins-regular text-sm text-hitam ml-4'>{item.time} menit</Text>
  </View>
  <View className='w-14 h-14 justify-center items-center'>
      <TouchableOpacity onPress={() => navigation.navigate('Latihan')}>
      <View className='w-12 h-12 rounded-full items-center justify-center bg-hijautua'>
      <Image source={require('../../assets/play.png')} className='object-fit h-3 w-3'/>
      </View>
      </TouchableOpacity>
  </View>
</View>
);

type Item = typeof DATA[0]
type Item2 = typeof DATA2[0]

const DetailPelajaran = ({navigation}: {navigation: any}) => {
  
  return (
    <SafeAreaView className='flex-1'>
        <ScrollView className='bg-white' contentContainerStyle={{ flexGrow: 1 }}>
        <View className='h-80' >
            <Image source={require('../../assets/video.png')} className='h-80' />
            
        </View>
        <LinearGradient 
            colors={['#00000000', '#000000']} 
            style={{height : 320, width : '100%', position: 'absolute'}}>

        </LinearGradient>
        <View className='absolute h-36  top-36 left-7'>
            
            <View className='items-center justify-center bg-hijau py-2 px-6'>
            <Text className='font-poppins-medium text-sm text-white'>Mengaji</Text>
            </View>
            <View>
            <Text className='font-poppins-semi-bold text-lg text-white pt-3'>Belajar Tajwid (Lengkap)</Text>
            </View>
            <View className='flex-1 flex-row items-end'>
            <View className='flex-1 flex-row'>
            <SvgCourse size={16} color='#FFFFFF'/>
            <Text className='font-poppins-regular text-sm text-white ml-2'>25 Materi</Text>
            </View>
            <View className='flex-row'>
            <SvgClock size={16} color='#FFFFFF'/>
            <Text className='font-poppins-regular text-sm text-white ml-2'>4h 24min</Text>
            </View>
            </View>
        </View>
        <View className='rounded-t-xl bg-white -top-3'>
        <View className='flex-1 flex-row items-end mt-5 px-8'>
            <View className='flex-1 justify-center'>
            <View className='flex-row'>
                <View className='h-12 w-12 bg-white rounded-full items-center justify-center'>
                    <View className='h-10 w-10 bg-abusedang rounded-full'>
                    </View>
                </View>
                <View className='absolute left-8 h-12 w-12 bg-white rounded-full items-center justify-center'>
                    <View className='h-10 w-10 bg-abusedang rounded-full'>
                    </View>
                </View>
                <View className='absolute left-16 h-12 w-12 bg-white rounded-full items-center justify-center'>
                    <View className='h-10 w-10 bg-abusedang rounded-full'>
                    </View>
                </View>
                <View className='absolute left-24 h-12 w-12 bg-white rounded-full items-center justify-center'>
                    <View className='h-10 w-10 bg-abusedang rounded-full'>
                    </View>
                </View>
            </View>
            
            <Text className='font-poppins-regular text-sm text-abutua mt-3 self-center'>456 Siswa Belajar</Text>
            </View>
            <View className='flex-1 justify-center items-end'>
            <Text className='font-poppins-semi-bold text-xl text-hitam ml-2'>4,5</Text>

            <AirbnbRating size={18} showRating={false} selectedColor='#FF8900' isDisabled={true}/>
            <TouchableOpacity onPress={() => navigation.navigate('Percakapan')}>
            <Text className='font-poppins-regular text-sm text-abutua mt-2'>234 Percakapan</Text>
            </TouchableOpacity>
            </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={ButtonItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                className='flex-grow-0'
                contentContainerStyle={{paddingLeft: 20, paddingRight: 4 , marginVertical: 20}} 
            />
        <View className='px-5'>
        {DATA2.map(function(item, i){
          return <CardItem2 item={item} key={i} navigation={navigation}/>
        })}
      </View>
      <View className='flex-row h-20 px-5 items-center border-t border-abuhijau'>

        <View className='h-14 w-20 bg-oranye rounded-sm items-center justify-center'>
        <SvgBookmark size={16} color='#FFFFFF'/>
        </View>
        <View className='flex-1 h-14 w-20 ml-5 bg-hijau rounded-sm items-center justify-center'>
        <Text className='font-poppins-semi-bold text-base text-white'>MULAI BELAJAR</Text>
        </View>
      </View>
        

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailPelajaran