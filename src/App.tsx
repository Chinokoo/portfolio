import NavBar from "./components/NavBar/NavBar";
import { About, Footer, Header, Skills, Work } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
