import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{headerShown : false}}/>
    </Stack>
  )
}

export default HomeLayout