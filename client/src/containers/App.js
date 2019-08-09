import React from "react";
import "./App.css";
import SideBar from "../components/SideBar/SideBar";
import Main from "../components/Main/Main";
import store from "../store";
import dataGen from "../dataGen";
import _ from "lodash";

function App() {
	const { contacts, user, activeUserId } = store.getState();

	return (
		<div className="App">
			<SideBar contacts={_.values(contacts)} />
			<Main user={user} activeUserId={activeUserId} />
		</div>
	);
}

export default App;
