import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";import App from "./App";
import Welcome from "./components/welcomepage";
import Login from "./components/loginpage";
import Register from "./components/registerpage";
import Main from "./components/mainpage";
import Profile from "./components/profilepage";
import CretaeActivity from "./components/createactivitypage";
import Discussion from "./components/discussionpage";
import Search from "./components/searchpage";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="mainpage" element={<Main/>} />
      <Route path="profilepage" element={<Profile/>} />
      <Route path="createactivitypage" element={<CretaeActivity/>} />
      <Route path="searchpage" element={<Search/>} />
      <Route path="discussionpage" element={<Discussion/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
export default App;