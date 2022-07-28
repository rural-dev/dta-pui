import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from '../component/Logo'
import { SvgCourse, SvgComponent, SvgPlay } from '../svg/SVG';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { api } from '../../constant/Api';
import { useFetch } from '../../hooks/Fetch';
import { image } from '../../constant/Const';

const DATA = [
  {
    pk: '0',
    name: 'Mengaji',
  },
  {
    pk: '1',
    title: 'Sirah',
  },
  {
    pk: '2',
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
type Kategori = {
  pk: number;
  name: string;
  image: string
}
const ButtonItem = ({ item } : { item: Kategori}) => (
  <TouchableOpacity>
  <View className='flex w-24 h-24 border border-abumuda rounded items-center justify-center mr-4'>
    <Text className='font-poppins-medium text-sm text-hitam'>{item.name}</Text>
  </View>
  </TouchableOpacity>
);

const CardItem2 = ({ item, navigation } : { item: Pelajaran, navigation: any}) => (
  <View className='flex-row h-32 rounded mr-4 my-4' key={item.pk}>
    <TouchableOpacity onPress={() => navigation.navigate('DetailPelajaran', {id: item.pk})}>
    <Image source={{uri: item.image ? item.image : image.default_pelajaran}} className='h-32 w-24 rounded' />
    </TouchableOpacity>
    <View className='flex-1 h-32'>
    <Text className='font-poppins-medium text-xs text-hijau ml-4'>{item.kategori_name}</Text>
    <Text className='font-poppins-medium text-base text-hitam ml-4 mt-2'>{item.name}</Text>
    <View className='flex-1 flex-row ml-4 items-end'>
    <View className='flex-1 flex-row'>
      <SvgCourse size={16} color='#6E6E6E'/>
      <Text className='font-poppins-regular text-sm text-abutua ml-2'>{item.total_submateri} Materi</Text>
      </View>
      <View className='flex-1 flex-row'>
      <AirbnbRating size={15} showRating={false} selectedColor='#FF8900' isDisabled={true} count={1}/>
      <Text className='font-poppins-regular text-sm text-abutua ml-2'>{item.average_star ? item.average_star : 0}</Text>
      </View>
      </View>
    </View>

  </View>
);

type Item = typeof DATA[0]
type Pelajaran = {
  pk: number;
  name: string;
  kategori_name: string;
  image: string;
  group_name: string;
  deskripsi: string;
  average_star: number;
  total_submateri: number
}

const Pelajaran = ({navigation}: {navigation: any}) => {
  const [kategori, setKategori] = useState([])
  const [list, setList] = useState([])
  const { loading, data } = useFetch(api.Pelajaran)
  const { loading: loading2, data: data2 } = useFetch(api.Kategori)

  useEffect(() => {
    setList(data.results)
  }, [loading, data])

  useEffect(() => {
    setKategori(data2.results)
  }, [loading2, data2])
  return (
    <SafeAreaView className='flex-1'>
        <ScrollView className='pt-5 pb-20 bg-white' contentContainerStyle={{ flexGrow: 1 }}>
      <TextInput placeholder='Cari Pelajaran' className='border-abusedang border rounded h-14 font-poppins-regular text-sm px-5 mx-5' placeholderTextColor='#D1D1D1'></TextInput>
      <FlatList
        data={kategori}
        renderItem={ButtonItem}
        keyExtractor={item => `${item.pk}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='flex-grow-0 mt-5'
        contentContainerStyle={{paddingLeft: 20, paddingRight: 4}} 
      />
      <View className='flex-row items-center mt-5 mx-5'>
        <Text className='font-poppins-semi-bold text-lg text-hitam mr-auto flex-1'>{list.length} Pelajaran Ditemukan</Text>
      </View>
      <View className='p-5'>
        {list.map(function(item, i){
          return <CardItem2 item={item} key={i} navigation={navigation}/>
        })}
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Pelajaran