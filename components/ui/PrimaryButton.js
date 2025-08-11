import { View, Text, Pressable, StyleSheet } from "react-native";


function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutercontainer}>
      <Pressable
        style={styles.buttonInnercontainer}
        onPress={onPress}
        android_ripple={{ color: '#d6ee6cff' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnercontainer: {
    backgroundColor: '#420624ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
