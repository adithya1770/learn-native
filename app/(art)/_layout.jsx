import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ArtLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="c1" options={{headerShown : false}}/>
      <Stack.Screen name="c2" options={{headerShown : false}}/>
      <Stack.Screen name="c3" options={{headerShown : false}}/>
      <Stack.Screen name="c4" options={{headerShown : false}}/>
    </Stack>
  )
}

export default ArtLayout