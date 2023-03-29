import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
	const [inputObject, setinputObject] = useState({
		title: "",
		date: "",
		price: "",
	});

	const titleChangeHandler = (e) => {
		setinputObject((prevState) => {
			return { ...prevState, title: e.target.value };
		});
	};
	const dateChangeHandler = (e) => {
		setinputObject((prevState) => {
			return { ...prevState, date: e.target.value };
		});
	};
	const priceChangeHandler = (e) => {
		setinputObject((prevState) => {
			return { ...prevState, price: e.target.value };
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();
		props.onSaveExpensedata(inputObject);

		setinputObject((prevState) => {
			return { ...prevState, title: "", date: "", price: "" };
		});
	};
	return (
		<form onSubmit={submitHandler}>
			{inputObject.title} ,{inputObject.price} ,{inputObject.date}
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={inputObject.title}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Price</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={inputObject.price}
						onChange={priceChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2024-12-31"
						value={inputObject.date}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
