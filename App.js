import { Linking, StyleSheet, Text, View } from 'react-native';
import Info from './components/Info';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>Today's Cases</Text>
        <Text style={{ fontSize: 15 }}>Covid Records of Nepal</Text>
        <Info />
      </View>
      <Text style={{ marginTop: '20%', paddingLeft: 30 }} onPress={() => Linking.openURL('https://akashpoudel.com.np')}>Made with ❤️  by Aakash </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoWrapper: {
    marginTop: "10%",
    padding: '5%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },

});
