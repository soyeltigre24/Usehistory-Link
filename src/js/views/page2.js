import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DisplayTodo from "./displayTodo";
import { Context } from "../store/appContext";

const Page2 = () => {
	const { actions } = useContext(Context);
	const [todos, setTodos] = useState("");
	const history = useHistory();
	console.log("my todos", todos);
	return (
		<React.Fragment>
			<h1>Page2</h1>
			<input onChange={e => setTodos(e.target.value)} />
			<button
				onClick={() => {
					actions.addTodo(todo);
				}}>
				addTodo
			</button>
			<button onClick={() => history.push("/")}>Go back home </button>
			<br />
			<DisplayTodo />
		</React.Fragment>
	);
};
export default Page2;
