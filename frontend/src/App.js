import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";import App from "./App";
import Welcome from "./components/welcomepage";
import Login from "./components/loginpage";
import Register from "./components/registerpage";
import 'bootstrap/dist/css/bootstrap.min.css';
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
export default App;