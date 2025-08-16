import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../components/ExpensesOutput/util/date";
import { fetchExpenses } from "../components/ExpensesOutput/util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
   const [isFetching, setIsFetching]= useState(true);
   const expensesCtx = useContext(ExpensesContext);

 //FOR MY REFERENCE
  useEffect(() => {
    async function getExpenses() {
      setIsFetching (true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
      
    }
    getExpenses();
 }, []);
 
   if (isFetching) {
  return <LoadingOverlay />;
}


  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
   const expenseDate = new Date(expense.date);
    return expenseDate >= date7DaysAgo && expenseDate <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensePeriod={`Last 7 Days (${date7DaysAgo.toLocaleDateString()} - ${today.toLocaleDateString()})`}
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
 