import React, { useContext } from "react";
import { Context } from "../store/appContext";

const DisplayTodo = () => {
	const { store } = useContext(Context);
	console.log("store", store.todos);
	return (
		<span>
			{store.todos.map((element, index) => {
				return <p key={index}>{element.label}</p>;
			})}
		</span>
	);
};
export default DisplayTodo;
