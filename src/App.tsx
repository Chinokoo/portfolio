import NavBar from "./components/NavBar/NavBar";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
