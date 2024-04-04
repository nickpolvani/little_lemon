import "./App.css";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Nav />
          <Main />
          <Footer />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
