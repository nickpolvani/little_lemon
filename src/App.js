
import './App.css';
import Footer from './components/Footer';
import Main from './pages/Main';
import Nav from './components/Nav';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <>
      <ChakraProvider>

        <Nav />
        <Main />
        <Footer />

      </ChakraProvider>

    </>
  );
}

export default App;
