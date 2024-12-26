import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput, Divider } from 'react-native-paper';

export default function App() {
  const [lkr, setLkr] = useState('');
  const [usd, setUsd] = useState('');
  const exchangeRate = 0.0034;

  const handleLKR = (value) => {
    setLkr(value);
    setUsd((value * exchangeRate).toFixed(4));
  }

  const handleUSD = (value) => {
    setUsd(value);
    setLkr((value / exchangeRate).toFixed(4));
  }

  return (
    <>
      <PaperProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.text} variant="headlineLarge">Currency Converter App</Text>
          <Divider />
          <TextInput style={styles.input}
            label="Sri Lankan Rupee"
            mode='outlined'
            value={lkr}
            onChangeText={handleLKR}
            keyboardType="numeric"
          />
          <TextInput style={styles.input}
            label="United States Dollar"
            mode='outlined'
            value={usd}
            onChangeText={handleUSD}
            keyboardType="numeric"
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