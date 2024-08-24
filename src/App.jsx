import GlobalStyle from "./components/GlobalStyle";
import 'react-toastify/dist/ReactToastify.css';
import Router from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename="/react-pokemon-dex/"/>
    </>
  )    
}

export default App
