import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
