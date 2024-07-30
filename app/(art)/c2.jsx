import { View, Text, ScrollView, SafeAreaView, StatusBar, Modal, TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';


const c2 = () => {
    const [sound, setSound] = useState();
    const [playbackStatus, setPlaybackStatus] = useState('stopped');
    const music = './musicassets/track6.mp3';
    const music1 = './musicassets/track5.mp3';
    const music2 = './musicassets/track7.mp3';
    const music3 = './musicassets/track8.mp3';
    const playSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require(music)
      );
      setSound(sound);
      
      await sound.playAsync();
    };
    const playSound1 = async () => {
        const { sound } = await Audio.Sound.createAsync(
          require(music)
        );
        setSound(sound);
        
        await sound.playAsync();
      };
    const playSound2 = async () => {
        const { sound } = await Audio.Sound.createAsync(
          require(music2)
        );
        setSound(sound);
        
        await sound.playAsync();
      };
    const playSound3 = async () => {
        const { sound } = await Audio.Sound.createAsync(
          require(music3)
        );
        setSound(sound);
        
        await sound.playAsync();
      };
    const playSound4 = async () => {
        const { sound } = await Audio.Sound.createAsync(
          require(music1)
        );
        setSound(sound);
        
        await sound.playAsync();
      };
    
    useEffect(() => {
      return sound
        ? () => {
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

    const stopSound = async () => {
      if (sound) {
          console.log('Stopping sound');
          await sound.stopAsync();
          setIsPlaying(false);
      }
  };

  const pauseSound = async () => {
    if (sound) {
        console.log('Pausing sound');
        await sound.pauseAsync();
        setPlaybackStatus('paused');
    }
};

const resumeSound = async () => {
    if (sound) {
        console.log('Resuming sound');
        await sound.playAsync();
        setPlaybackStatus('playing');
    }
};
  return (
    <SafeAreaView className="bg-black w-full h-full">
            <ScrollView>
                <Text className="text-white font-plight text-6xl mt-6 pt-10 ml-8">Indie Folk for You!</Text>
                <View className="h-72 w-80 ml-7 mt-12 relative bg-black rounded-3xl p-2 border-white border-2">
                    <Image
                        source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/ce8fdb0d5f6f83fb4d51f336007fe173/1900x1900-000000-80-0-0.jpg' }}
                        className="h-full w-32 mt-2 rounded-3xl absolute left-2"
                    />
                    <View className="ml-36">
                        <Text className="text-white text-2xl font-pblack mb-4 ml-1 mt-2">Matkar Maya Ko</Text>
                        <TouchableOpacity
                            className="bg-white rounded-md"
                            onPress={playSound4}
                        >
                            <Text className="text-black font-pblack text-xl text-center t-4">
                              Play
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={stopSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Stop
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={pauseSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Pause
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={resumeSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Resume
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="h-72 w-80 ml-7 mt-10 relative bg-black rounded-3xl p-2 border-white border-2">
                    <Image
                        source={{ uri: 'https://i.ytimg.com/vi/EHelINfImh8/maxresdefault.jpg' }}
                        className="h-full w-32 mt-2 rounded-3xl absolute left-2"
                    />
                    <View className="ml-36">
                        <Text className="text-white text-3xl font-pblack mb-4 ml-1 mt-4">Khwaab</Text>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-4"
                            onPress={playSound1}
                        >
                            <Text className="text-black font-pblack text-xl text-center t-4">
                              Play
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={stopSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Stop
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={pauseSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Pause
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={resumeSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Resume
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="h-72 w-80 ml-7 mt-10 relative bg-black rounded-3xl p-2 border-white border-2">
                    <Image
                        source={{ uri: 'https://i.scdn.co/image/ab67616d0000b27358ecb3e5ec3bbef70ee09e43' }}
                        className="h-full w-32 mt-2 rounded-3xl absolute left-2"
                    />
                    <View className="ml-36">
                        <Text className="text-white text-2xl font-pblack mb-4 ml-1">Choo Lo</Text>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-4"
                            onPress={playSound2}
                        >
                            <Text className="text-black font-pblack text-xl text-center t-4">
                              Play
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={stopSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Stop
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={pauseSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Pause
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={resumeSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Resume
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="h-72 w-80 ml-7 mt-10 relative bg-black rounded-3xl p-2 border-white border-2">
                    <Image
                        source={{ uri: 'https://i1.sndcdn.com/artworks-000050921142-5lrp1o-t500x500.jpg' }}
                        className="h-full w-32 mt-2 rounded-3xl absolute left-2"
                    />
                    <View className="ml-36">
                        <Text className="text-white text-2xl font-pblack mb-4 ml-1 mt-3">Jhoom</Text>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-4"
                            onPress={playSound3}
                        >
                            <Text className="text-black font-pblack text-xl text-center t-4">
                              Play
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={stopSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Stop
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={pauseSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Pause
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-white rounded-md mt-3"
                            onPress={resumeSound}
                        >
                            <Text className="text-black font-pblack text-xl text-center">
                                Resume
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

export default c2