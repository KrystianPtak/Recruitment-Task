import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Download from "./components/Download/Download";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Accordion from "./components/Accordion/Accordion";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Home />
				<Features />
				<Download />
				<Accordion />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
