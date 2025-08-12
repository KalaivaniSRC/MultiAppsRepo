import { View, Text,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";


function ExpenseSummary({ periodName, expenses }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
      </View>
    </View>
  );
}

export default ExpenseSummary;


const styles=StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.error50,
        borderRadius:6,
        flextDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        fontSize:12,
        color:GlobalStyles.colors.primary400
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }

});