import React, { useState } from "react";
import { StickyTopBar } from "../layout/stickyTopBar/StickyTopBar";
import { StickyBottomBar } from "../layout/stickyBottomBar/StickyBottomBar";
import Shop from "./Shop";
import Trial from "./Trial";

const Home = () => {
	const [tab, setTab] = useState(0);
	const onTabChange = (i) => {
		setTab(i);
	};
	return (
		<div>
			<StickyTopBar tab={tab} onTabChange={onTabChange} />
			{tab === 0 && <Trial />}
			{tab === 1 && <Shop />}
			<StickyBottomBar tab={tab} setTab={setTab} />
		</div>
	);
};

export default Home;
