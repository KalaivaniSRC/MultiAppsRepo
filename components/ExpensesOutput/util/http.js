import axios from 'axios'



export function storeExpense(expenseData){
    axios.post('https://react-native-expenseapp-5d32b-default-rtdb.firebaseio.com/expenses.json');
    expenseData

}