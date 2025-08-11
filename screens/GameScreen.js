import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function generateRandomBetween(min, max, exclude) {
  if (max - min <= 1) {
    return min !== exclude ? min : max;
  }

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}


let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState(1);

  
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds); 
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setRounds((prevRounds) => prevRounds + 1);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        
        
        <Card>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
        </View>
        </Card>
      </View>

      <View>
        {/* log area or guess history (optional) */}
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    maxWidth: "80%",
    marginTop: 20,
  },
});
