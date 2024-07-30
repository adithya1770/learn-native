import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="rcenter" options={{headerShown:false}}/>
    </Stack>
  )
}

export default RLayout