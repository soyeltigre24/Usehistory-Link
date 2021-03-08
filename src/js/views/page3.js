import React from "react";
import { useHistory } from "react-router-dom";

const Page3 = () => {
	const history = useHistory();
	return (
		<React.Fragment>
			<h1>Page3</h1>
			<button onClick={() => history.push("/")}>Go back home </button>
		</React.Fragment>
	);
};
export default Page3;
