import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";import App from "./App";
import Welcome from "./components/welcomepage";
import Login from "./components/loginpage";
import Register from "./components/registerpage";
import Main from "./components/mainpage";
import Profile from "./components/profilepage";
import CretaeActivity from "./components/createactivitypage";
import DiscussionPage from "./components/discussionpage";
import Search from "./components/searchpage";
import CreateContest from "./components/createContest";
import SolveChallenge from "./components/solveChallenge";
import Discussion from "./components/discussion";
import SearchActivity from "./components/searchActivity";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateDiscussion from "./components/createDiscussion";
import CoderResult from "./components/coderResult";
import SolveNonCoddingQuestion from "./components/answeNonCoddingQuestion";
import NonCoddingResults from "./components/nonCoddingResult";

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
      <Route path="discussionpage" element={<DiscussionPage/>} />
      <Route path="discussion" element={<Discussion/>} />
      <Route path="searchActivity" element={<SearchActivity/>} />
      <Route path="createcontest" element={<CreateContest/>} />
      <Route path="solvechallenge" element={<SolveChallenge/>} />
      <Route path="createDiscussion" element={<CreateDiscussion/>} />
      <Route path="coderResult" element={<CoderResult/>} />
      <Route path="solveNonCoddingQuestion" element={<SolveNonCoddingQuestion/>} />
      <Route path="nonCoddingResults" element={<NonCoddingResults/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
export default App;