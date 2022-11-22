import React from "react";
import './footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div>
			<div className="section">
				<b>Trials Section</b>
				<ul>
					<li>link 1</li>
					<li>link 2</li>
					<li>link 3</li>
					<li>link 4</li>
				</ul>
			</div>
			<div className="section">
				<b>Useful Links</b>
				<ul>
				<li>link 1</li>
					<li>link 2</li>
					<li>link 3</li>
					<li>link 4</li>
				</ul>
			</div>
			</div>
			<div>
				<div className="section">
					<b>Shops Section</b>
					<ul>
					<li>link 1</li>
					<li>link 2</li>
					<li>link 3</li>
					<li>link 4</li>
				</ul>
				</div>
				<div className="section">
					<b>Customer Policies</b>
					<ul>
					<li>link 1</li>
					<li>link 2</li>
					<li>link 3</li>
					<li>link 4</li>
					</ul>
				</div>
			</div>	
		</div>
	)
};

export default Footer;
