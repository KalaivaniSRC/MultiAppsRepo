import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return (
    <View style={styles.list}>
      {data.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  list: {
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  listItem: {
    borderRadius: 6,
    padding: 8,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
