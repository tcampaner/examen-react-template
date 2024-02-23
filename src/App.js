import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Menu from "./Menu";
import Exercici1 from "./components/Exercici1";
import Exercici2 from "./components/Exercici2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route path="/exercici1" element={<Exercici1 />} />
          <Route path="/exercici2" element={<Exercici2 />} />
          <Route path="*" element={<h1>Opció incorrecta</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;