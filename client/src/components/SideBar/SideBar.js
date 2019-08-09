import React from "react";
import "./SideBar.css";
import User from "../../containers/User/User";

const SideBar = ({ contacts }) => {
	return (
		<aside className="SideBar">
			{contacts.map(contact => (
				<User user={contact} key={contact.user_id} />
			))}
		</aside>
	);
};

export default SideBar;
