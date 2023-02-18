import GlobalStyles from "./components/GlobalStyles";
import MainBody from "./components/MainBody";
import { BrowserRouter } from "react-router-dom";
import data from "./data.json";

function App() {
  return (
    <BrowserRouter basename={data.basePath}>
      <GlobalStyles />
      <MainBody data={data} />
    </BrowserRouter>
  );
}

export default App;
