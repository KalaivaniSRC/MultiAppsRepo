import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Pressable onPress={() => props.onDeleteItem(props.id)}>
        <Text style={styles.deleteText}>X</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
});
