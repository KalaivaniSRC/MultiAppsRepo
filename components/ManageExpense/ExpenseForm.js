import {  Text ,View ,StyleSheet} from "react-native";
import Input from "./Input"
import { useState } from "react";




function ExpenseForm (){
    useState [amountValue, setAmountValue]=useState('');

    function amountChangeHandler(enteredAmount){
        setAmountValue(enteredAmount);
    }


    return (
    <View style={styles.form}>
        <Text style={styles.Title}>Your Expense</Text>
        <View style={styles.inputsRow}>
        <Input 
            style={styles.rowInput}
            label="Amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText:amountChangeHandler,
            value:amountValue
        }} />
        <Input
            style={styles.rowInput}
            label="Date" textInputConfig={{
            placeholder:'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => { }
        }}/>
        </View>
        
        <Input label="Description" textInputConfig={{
            multiline:true,
            // autocorrect:false, 
            // autoCpitalize:'none'   

        }}/>


    </View>
    );

}

export default ExpenseForm;

const styles=StyleSheet.create({
    form:{
        marginTop:40,

    },
    Title:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginVertical:24,
        textAlign:'center'

    },

    inputsRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    rowInput:{
        flex:1,

    }
    
    

});