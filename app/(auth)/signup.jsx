import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="test-3xl">signup</Text>
      <Link  href="/signin">redirect to signin</Link>
    </View>
  )
}

export default signup