import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput } from 'react-native-paper';

export default function App() {
  const[lkr, setLkr] = useState('');
  const[usd, setUsd] = useState('');


  return (
    <>
      <PaperProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.text} variant="headlineLarge">Currency Converter App</Text>
          <TextInput style={styles.input}
            label="Enter LKR"
            mode='outlined'
            value=''
          />
          <TextInput style={styles.input}
            label="Enter USD"
            mode='outlined'
          />
        </View>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  },
  input: {
    padding: 10,
    margin: 10,
    width: '80%',
  },
});
