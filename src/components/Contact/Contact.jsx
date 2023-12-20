import "./Contact.scss";
import Counter from "./Counter";
import EmailForm from "./EmailForm";

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<Counter />
			<h2 className="contact__title">Stay up-to-date with what we're doing</h2>
			<EmailForm />
		</section>
	);
};

export default Contact;
