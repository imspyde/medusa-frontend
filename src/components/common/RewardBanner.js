import React from "react";
import { useSelector } from "react-redux";
import "./rewardBanner.css";
export const RewardBanner = () => {
	const { user } = useSelector((state) => state.user);

	const rewards = [
		{
			title: "points",
			url: "/",
			points: user?.customer?.metadata?.trial_point || user?.trial_point || 0,
			linkText: "Try Now",
		},
		{ title: "bucks", url: "/", points: "10", linkText: "Refer Now" },
		{ title: "wallet", url: "/", points: "10", linkText: "Earn Cashback" },
	];
	return (
		<div className="reward-banner">
			{rewards.map((item) => (
				<div className="links">
					<div className="points">{item.points}</div>
					<div className="title">
						<span>{item.title}</span>
						<a href={item.url}>{item.linkText}</a>
					</div>
				</div>
			))}
		</div>
	);
};
