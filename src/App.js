import React, { Fragment, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import Header from "./components/Header";
import Footer from "./components/footer/Footer";

import "./styles/scss/app.scss";

import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";

import { history } from "./helpers/history";

import Home from "./containers/Home";
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import BoardUser from './containers/BoardUser';
import BoardModerator from './containers/BoardModerator';
import BoardAdmin from './containers/BoardAdmin';

const App = () => {

	/*const [showModeratorBoard, setShowModeratorBoard] = useState(false);
	const [showAdminBoard, setShowAdminBoard] = useState(false);
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();
		if (user) {
			setCurrentUser(user);
			setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
			setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
		}

		EventBus.on("logout", () => {
			logout();
		});

		return () => {
			EventBus.remove("logout");
		};
	}, []);

	const logout = () => {
		AuthService.logout();
		setShowModeratorBoard(false);
		setShowAdminBoard(false);
		setCurrentUser(undefined);
	}*/

	return (

		<Router history={history}>
			<Fragment>
				<Header />
				<main className="my-5 py-5">
				<Routes>
					<Route exact path={"/"} element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route path="/user" element={<BoardUser />} />
					<Route path="/mod" element={<BoardModerator />} />
					<Route path="/admin" element={<BoardAdmin />} />
				</Routes>
				</main>
				<Footer />
			</Fragment>
		</Router>
	);
}

export default App;

/** Removed and inclided in Layout */
/**
 * <Fragment>
			<Header />

			

			<Footer />
		</Fragment>
 */
{/* <main className="my-5 py-5">
	<Container className="px-0">
		<Row className="gx-5 pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
			<Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
				<SideCard />
			</Col>
			<Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
				<h1> Welcome to {process.env.APP_NAME} </h1>
				<Post />
			</Col>
		</Row>
	</Container>
</main> */}