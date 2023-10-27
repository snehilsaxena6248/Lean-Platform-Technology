import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import Subject from "./components/Subject.jsx"
import Privacy from "./components/Privacy.jsx"
import Account from "./components/Account.jsx"
import Music from "./components/Music.jsx"
import "./styles/app.css"




function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/subject" element={<Subject/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/music" element={<Music/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
