import React, { useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);
	console.log("from home", store.todos);

	return (
		<div className="text-center mt-5">
			<Link to="/page2">
				<button>Go to Page 2</button>
			</Link>
			<Link to="/page3">
				<button>Go to page 3</button>
			</Link>
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
