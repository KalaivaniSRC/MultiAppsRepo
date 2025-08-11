import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function UserScreen({navigation}) {

  function openDrawerHandler(){
    navigation.toggleDrawer(); 
  }

  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
      <StatusBar style="auto" />
      <Button title="Open Drawer" onPress={openDrawerHandler}/>
    </View>
  );
}
export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
