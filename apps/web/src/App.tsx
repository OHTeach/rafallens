import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import Quote from "./components/Quote.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Quote />
      <Footer />
    </>
  );
}