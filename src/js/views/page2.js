import React from "react";
import { useHistory } from "react-router-dom";

const Page2 = () => {
	const history = useHistory();
	return (
		<React.Fragment>
			<h1>Page2</h1>
			<button onClick={() => history.push("/")}>Go back home </button>
		</React.Fragment>
	);
};
export default Page2;
