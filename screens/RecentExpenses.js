
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../components/ExpensesOutput/util/date";


function RecentExpenses(){

    const expensesctx=useContext(ExpensesContext);

    const recentExpenses = expensesctx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) &&  (expense.date <= today) ;

    });


    return(
        <ExpensesOutput expenses={recentExpenses}   expensePeriod="Last 7 Days"  fallbackText="No expenses registered for last 7 days"/>
     );
    
}


export default RecentExpenses;