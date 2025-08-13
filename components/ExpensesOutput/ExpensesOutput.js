import {  View, StyleSheet} from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";




function ExpensesOutput({expenses, expensePeriod,fallbackText}){
    let content =<Text style={styles.infoText}>{fallbackText} </Text>;

    if (expenses.length >0){
        content = <ExpenseList expenses={expenses}/>
    }

    return <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensePeriod} />
            
      <ExpenseList expenses={expenses}/>
        
    </View>

}
export default ExpensesOutput;


const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700,
    },
    infoText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32

    }
});