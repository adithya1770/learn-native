import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GitPg = () => {
  const handlePress = () => {
    Linking.openURL('https://github.com/adithya1770');
  };
  const handlePress2 = () => {
    Linking.openURL('https://github.com/adithya1770/learn-native')
  }

  return (
    <LinearGradient
      colors={['red', 'orange']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeh7VA5v6GDNrPNYqB_upJCaTugdW3C_p1g&s' }}
        className="h-12 w-12 rounded-3xl absolute left-64 bottom-56"
                    />
        <Text className="text-6xl font-plight mt-32 ml-4">created by adithyaps</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text className="text-4xl font-pblack m-28 mt-64 pt-2 pl-6 ml-16 underline">github</Text>
          <Text className="text-xl font-plight mt-20 ml-20">Click above on the text</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default GitPg;
