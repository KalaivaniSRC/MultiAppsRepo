import { Text,StyleSheet, TextInput, View, Alert } from "react-native";
import { useState } from "react";

import PrimaryButton from '../components/ui/PrimaryButton'
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";

function StartGameScreen({onPickNumber}) {
const [enteredNumber,setenteredNumber]=useState('');

function numberInputHandler(enteredText){
    setenteredNumber(enteredText);

}

function resetInputHandler(){
    setenteredNumber('');
}

function confirmNumberInputHandler(){
    const chosenNumber=parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber<=0|| chosenNumber>99){

        Alert.alert('Invalid Number!',
            'Number has to be a number between 1 and 99.',
            [{ text:'Okay', style:'destructive',onPress:resetInputHandler}]
        );
        return;
     }
     onPickNumber(chosenNumber);
    
}



return (
    <View>
         <Title>Guess The Number</Title>
   
   
    <Card> 
    <TextInput style={styles.numberInput} 
    maxLength={2}
    keyboardType="number-pad" 
    autoCapitalize="none"
    autoCorrect={false}
    onChangeText={numberInputHandler}
    value={enteredNumber}
    />
     
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>

         <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmNumberInputHandler}>Confirm</PrimaryButton>

         </View>
        
    
    </View>
       
</Card>
 </View>

)
}


const styles=StyleSheet.create({

    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        marginTop: 100,
        backgroundColor: '#72063c',
        marginHorizontal:24,
        borderRadius:8,
        elevation:4,
        },

    numberInput:{
        height:80,
        width:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'

    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
        width: '100%',
        

    },

    buttonContainer:{
        flex:1,
    }
})






export default StartGameScreen;