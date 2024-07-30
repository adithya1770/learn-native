import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
      <LinearGradient
      colors={['red', 'orange']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
    <View>
      <Text className="text-7xl font-pblack pt-72 pl-2" style={styles.shadowText}>
        Raw
        Rhythms
      </Text>
      <Link className='text-2xl font-pbold pl-2 pt-10' href='/home'>Home</Link>
      <Link className='text-2xl font-pbold pl-2 pt-4' href='/rcenter'>R-Center</Link>
      <Link className='text-2xl font-pbold pl-2 pt-4' href='/github'>Dev Info</Link>
    </View>
    </ LinearGradient>
  );
}

const styles = StyleSheet.create({
  shadowText: {
    color: '#000', 
    textShadowColor: 'white', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 3,
  },
});