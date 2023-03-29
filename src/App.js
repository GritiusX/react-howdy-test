import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const DUMMY_EXPENSES = [
		{
			id: "1",
			date: new Date(2021, 1, 1),
			title: "Car Insurance",
			price: 294.67,
		},
		{
			id: "2",
			date: new Date(2022, 2, 2),
			title: "Car Insurance 2",
			price: 294.67,
		},
		{
			id: "3",
			date: new Date(2023, 3, 3),
			title: "Car Insurance 3",
			price: 294.67,
		},
		{
			id: "4",
			date: new Date(2024, 4, 4),
			title: "Car Insurance 4",
			price: 294.67,
		},
	];
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
