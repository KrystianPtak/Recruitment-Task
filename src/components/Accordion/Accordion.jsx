import "./Accordion.scss";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import accordionData from "./accordionData";

const Accordion = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleAccordionClick = (index) => {
		if (openIndex === index) {
			setOpenIndex(null);
		} else {
			setOpenIndex(index);
		}
	};

	return (
		<section className="accordion container">
			<div className="accordion__questions">
				<h2 className="accordion__title">Frequently Asked Questions</h2>
				<p className="accordion__text">
					Here are some of our FAQs. If you have any other questions you'd like
					answered please feel free to email us.
				</p>
				<div>
					{accordionData.map((q, index) => (
						<AccordionItem
							key={index}
							question={q.question}
							answer={q.answer}
							isOpen={openIndex === index}
							onClick={() => handleAccordionClick(index)}
						/>
					))}
				</div>
			</div>
			<button className="accordion__button">More Info</button>
		</section>
	);
};

export default Accordion;
