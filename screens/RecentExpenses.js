import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../components/ExpensesOutput/util/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

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
