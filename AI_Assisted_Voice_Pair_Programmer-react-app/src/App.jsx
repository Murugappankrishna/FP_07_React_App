import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";

import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <>
      <section>
        <div class="main-container">
          <Navbar />
          <MainContainer className="MainContainer" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
