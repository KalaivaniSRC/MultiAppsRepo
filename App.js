import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  
  function addGoalsHandler() {
    if (enteredGoalText.trim().length === 0) {
      return; 
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoalText },
    ]);
    setEnteredGoalText(''); 
  }

  
  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!!!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalsHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            text={itemData.item.value}
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}
          />
        )}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
