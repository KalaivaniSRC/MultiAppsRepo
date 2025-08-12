import { createContext, useReducer } from "react";


export const ExpensesContext=createContext({
    expenses:[],

    addExpense: ({description,amout,date})=>{

    },
    deleteExpense:(id)=> {

    },
    updateExpense:(id,{description,amout,date})=>{

    }
});

function expenseReducer(state,action){
    switch (action.type){
        case 'ADD':
            return []
        case 'UPDATE':
        case 'DELETE':
        default:
            return state;
    }
}


function ExpensesContextProvider({children}){
    const [expensesState,dispatch]=useReducer(expenseReducer);

    function addExpense({expenseData}){
        dispatch({type:'ADD', payload: expenseData})
    }
    
    function deleteExpense(id){
        dispatch({type:'DELETE', payload:id})
    }

    function updateExpense(id,expenseData){
        dispatch({typpe:'UPDATE', payload:{id:id,data:expenseData}})
    }


    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>

}


export default ExpensesContextProvider;