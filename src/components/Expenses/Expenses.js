import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
	const expenses = props.expenses || [];

	const [filteredYear, setFilteredYear] = useState("2019");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expenses.map((expense, i) => (
				<ExpenseItem
					key={i}
					title={expense.title}
					date={expense.date}
					price={expense.price}
				/>
			))}
		</>
	);
};

export default Expenses;
