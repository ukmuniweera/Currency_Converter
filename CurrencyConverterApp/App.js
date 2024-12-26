import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This Currency Converter app allows users to effortlessly convert between Sri Lankan Rupees (LKR) and US Dollars (USD). Built with React Native Expo and styled using React Native Paper, it features a clean interface, input fields for amounts, conversion type selection and instant results for quick and accurate currency calculations.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
