import { View, Text, ScrollView, SafeAreaView, StatusBar, Modal, TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';


const c3 = () => {
    const [sound, setSound] = useState();
    const [playbackStatus, setPlaybackStatus] = useState('stopped');
    const music = './musicassets/track10.mp3';
    const music1 = './musicassets/track9.mp3';
    const music2 = './musicassets/track11.mp3';
    const music3 = './musicassets/track12.mp3';
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
                <Text className="text-white font-plight text-6xl mt-6 pt-10 ml-8">Indie Electro for You!</Text>
                <View className="h-72 w-80 ml-7 mt-12 relative bg-black rounded-3xl p-2 border-white border-2">
                    <Image
                        source={{ uri: 'https://images.genius.com/b8132bac315f323d40a44ef43f09ba3b.1000x1000x1.jpg' }}
                        className="h-full w-32 mt-2 rounded-3xl absolute left-2"
                    />
                    <View className="ml-36">
                        <Text className="text-white text-4xl font-pblack mb-4 ml-1 mt-2">Pran </Text>
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
                        source={{ uri: 'https://f4.bcbits.com/img/a4088488838_65' }}
                        className="h-full w-32 mt-2 rounded-3xl absolute left-2"
                    />
                    <View className="ml-36">
                        <Text className="text-white text-3xl font-pblack mb-4 ml-1 mt-4">Jind Mahi</Text>
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
                        source={{ uri: 'https://i1.sndcdn.com/artworks-000596896385-1bobh6-t500x500.jpg' }}
                        className="h-full w-32 mt-2 rounded-3xl absolute left-2"
                    />
                    <View className="ml-36">
                        <Text className="text-white text-2xl font-pblack mb-4 ml-1">Bombay Dreams</Text>
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
                        source={{ uri: 'https://source.boomplaymusic.com/group10/M00/10/13/111b0eafa7244703afedc4a3d010c88e_464_464.jpg' }}
                        className="h-full w-32 mt-2 rounded-3xl absolute left-2"
                    />
                    <View className="ml-36">
                        <Text className="text-white text-2xl font-pblack mb-4 ml-1 mt-3">Thandi Hawa</Text>
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

export default c3