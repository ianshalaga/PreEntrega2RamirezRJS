import "./App.css";
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen items-center bg-sky-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
