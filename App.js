import { StatusBar } from 'expo-status-bar';
import React , {useState}from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  const [text, setText] = useState(100);

  return (
    <View style={styles.container}>
      <Text>Convert for Austin's currency!!</Text>
      <TextInput
        style={{height: 40, fontSize: 20, color:'red'}}
        placeholder="Type here to convert!"
        onChangeText={setText}
        defaultValue={'100'}></TextInput>
      <TextInput
        style={{height: 40, fontSize: 20, color:'red'}}
        value={text*10}
        defaultValue={'10'}
      ></TextInput>
        
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1283239876251602944/d5XpXGVX_400x400.jpg',
        }} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "200px",
    height: "200px"
  }
});
