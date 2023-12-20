import React from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
	return (
		<div className="accordion__item">
			<div className="accordion__box" onClick={onClick}>
				<p className="accordion__question">{question}</p>
				<ArrowIcon
					className={`accordion__icon ${
						isOpen ? "accordion__icon-active" : ""
					}`}
				/>
			</div>
			{isOpen && <div className="accordion__answer">{answer}</div>}
		</div>
	);
};

export default AccordionItem;
