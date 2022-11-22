import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./stickyTopBar.css";

export const StickyTopBar = (props) => {

	const links = [
		{ name: "Trials", url: "/trials" },
		{ name: "Shop", url: "/shop" },
	];

	return (
		<>
		<Navbar fixed="top" className="top-nav">
			<div className="trials-shop">
				{links.map((s,i)=>(
					<div onClick={() => {
						props.onTabChange(i);
					 }}
					 className={`${props.tab === i && "selected-tab-modal"} single-tab-modal pb-2`}
					 >
						{s.name}
					</div>
				))}
			</div>
		</Navbar>
		</>
	);
};

