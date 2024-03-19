// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from "./component/form/login"
import Home from "./component/homePage"
import Login from "./component/loginPage"
import Email from "./component/email"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/login"} element={<Login/>}></Route>
            <Route path={"/email"} element={<Email/>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
