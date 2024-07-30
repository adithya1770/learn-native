import { View, Text, ScrollView, Image, SafeAreaView, RefreshControl} from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { ImageBackground } from 'react-native'

const home = () => {
  const [refresh, setRefresh] = useState(false);
  const onRefresh = () => {
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false);
    }, 1000)
  }
  return (
    <ImageBackground
      source={{ uri: 'https://www.bhmpics.com/downloads/music-band-Wallpapers/6.wp9131348.jpg' }}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
    <SafeAreaView >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
      <Text className='absolute top-32 left-16 z-10 text-7xl font-pblack pt-4'>
        <Link href="/c1">
        Indie{'\n'}
        Rock
        </Link>
      </Text>
      <View className="mt-16 ml-8 h-72 w-80 rounded-xl bg-red-400">
      <Image
        source={{ uri: 'https://variety.com/wp-content/uploads/2023/10/GettyImages-927293818.jpg' }}
        className="items-center justify-center flex-1 h-20 w-80 rounded-xl opacity-30"
      />
      </View>
      <Text className='mt-48 absolute top-64 left-16 z-10 text-7xl font-pblack pt-4'>
        <Link href="/c2">
        Indie{'\n'}
        Folk
        </Link>
      </Text>
      <View className="mt-8 ml-8 h-72 w-80 rounded-xl bg-red-400">
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/02/The_Lumineers_performing_at_Wrigley_Field_in_2022.jpg' }} 
        className="items-center justify-center flex-1 h-20 w-80 rounded-xl opacity-30"
      />
      </View>
      <Text className='absolute bottom-16 left-16 z-10 text-7xl font-pblack pt-4'>
        <Link href="/c4">
        Indie{'\n'}
        Rap
        </Link>
      </Text>
      <View className="mt-8 ml-8 h-72 w-80 rounded-xl bg-red-400">
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXBoRNezNKXQhsgSqGRoHwpYQEvrKrMmSMw&s' }}
        className="items-center justify-center flex-1 h-20 w-80 rounded-xl opacity-30"
      />
      </View>
      <Text className='absolute bottom-96 left-16 z-10 text-7xl font-pblack pt-4'>
        <Link href="/c3">
        Indie{'\n'}
        Electro
        </Link>
      </Text>
      <View className="mt-8 ml-8 h-72 w-80 rounded-xl bg-red-400">
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgqXJdU3EvzJXKPhHdz9Js0xqhsivmjm-MA&s' }}
        className="items-center justify-center flex-1 h-20 w-80 rounded-xl opacity-30"
      />
      </View>
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default home

