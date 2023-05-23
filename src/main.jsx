import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const Cell = function (props) {
	const onClickCell=()=>{
		props.text
	}
	return (
		<div className="cell" onClick={onClickCell}>
			{props.text}
		</div>
	);
};

const cells = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const Chessboard = function () {
	return (
		<div>
			{cells.map((items) => {
				return (
					<div className="row">
						{items.map((item) => {
							return (
								<div className="cell">
									<Cell text={item} />
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<div>
		<Chessboard />
	</div>
);
