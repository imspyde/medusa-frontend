import React from "react";
import { onlyUnique } from "../../common/Helper";

const OptionSelect = ({ option, title, current, updateOption }) => {
	const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique);

	return (
		<div className="my-1">
			<span className="">Select {title}</span>
			<div className="my-2 d-flex select-option-box">
				{filteredOptions.map((v) => {
					return (
						<button
							onClick={() => updateOption({ [option.id]: v })}
							key={v}
							className={`select-option ${v === current && "selected-option"}`}
						>
							{v}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default OptionSelect;
