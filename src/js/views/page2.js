import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Page2 = () => {
	const [todos, setTodos] = useState("");
	const history = useHistory();
	console.log("my todos", todos);
	return (
		<React.Fragment>
			<h1>Page2</h1>
			<input onChange={() => setTodos(e.target.value)} />
			<button onClick={() => history.push("/")}>Go back home </button>
		</React.Fragment>
	);
};
export default Page2;
