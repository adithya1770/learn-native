import { View, Text, ScrollView, SafeAreaView, StatusBar, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { LinearGradient } from 'expo-linear-gradient';

const RCenter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [requests, setRequests] = useState([]);
  const req = async () => {
    const { data, error } = await supabase.from('requests').insert([{ reqs: text, user_name: user }]).select();
    if (error) {
      console.error('Error inserting request:', error);
    } else {
      console.log('Request inserted:', data);
    }
  }

  const resq = async () => {
    const { data, error } = await supabase.from('requests').select('*');
    if (error) {
      console.error('Error fetching requests:', error);
    } else {
      setRequests(data);
    }
  }

  

  return (
    <LinearGradient
      colors={['red', 'orange']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
    <SafeAreaView>
      <ScrollView>
        <StatusBar hidden={false} translucent={true} />
        <Text className="pt-28 font-pblack pl-7 text-7xl">
          Request Center
        </Text>
        <TouchableOpacity
          className="h-24 w-full bg-black items-center pt-4 mt-4"
          onPress={() => { setModalVisible(true) }}
        >
          <Text className="text-white mt-3 font-pblack text-3xl">what is this?</Text>
        </TouchableOpacity>
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="bg-red-400 h-full w-full">
            <View>
              <Text className="text-4xl font-plight p-10">Hey User! This is the RawRhythm Request Center where you can post requests for songs to get it listed! If your song doesn't get listed try to ping the developer..</Text>
              <TouchableOpacity
                className="h-24 w-full bg-black items-center pt-4 mt-4"
                onPress={() => { setModalVisible(false) }}
              >
                <Text className="text-white mt-3 font-pblack text-3xl">understood!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="request here!"
          className="mt-6 h-10 w-64 bg-white font-pbold pl-20 rounded-xl ml-16"
        />
        <TextInput
          onChangeText={setUser}
          value={user}
          placeholder='username'
          className="mt-4 h-10 w-64 bg-white font-pbold pl-24 rounded-xl ml-16"
        />
        <TouchableOpacity
          className="pl-24 flex-row items-center"
          onPress={req}
        >
          <Text className="text-white font-pblack text-3xl mr-6 mt-6">
            Send
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center"
          onPress={resq}
        >
          <Text className="text-white font-pblack text-3xl mr-6 ml-24 mt-1">
            See
          </Text>
        </TouchableOpacity>
        <View className="overflow-y-scroll h-52 bg-orange mt-4 border border-black-100">
        <Text className="text-xl text-black font-pblack ml-24 mt-4">Existing Requests</Text>
        {requests.map((req, index) => (
          <Text key={index} className="text-xl text-black font-plight ml-24 mt-2">{req.user_name} says {req.reqs}!</Text>
        ))}
        </View>
      </ScrollView>
    </SafeAreaView>
    </ LinearGradient>
  );
}

export default RCenter;
