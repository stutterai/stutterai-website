import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About/About";
import Approved from "./Pages/Approved/Approved";
import Contact from "./Pages/Contact/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Footer from "./Pages/Home/Footer/Footer.jsx";
import Header from "./Pages/Home/Header/Header.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Service from "./Pages/Services/Service/Service";
import Chatbot from "./Pages/Chatbot/Chatbot";
import Word from "./Pages/Chatbot/Word";
import Vowel from "./Pages/Chatbot/Vowel";
import Sentence from "./Pages/Chatbot/Sentence";
import Vowelsound from "./Pages/Chatbot/vowel-sounds";
import Vowelsounddnd from "./Pages/Chatbot/vowel-sounds-dnd";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Chatbot" element={<Chatbot />} />
            <Route path="/Word" element={<Word />} />
            <Route path="/Vowel" element={<Vowel />} />
            <Route path="/Sentence" element={<Sentence />} />
            <Route path="/vowelsound" element={<Vowelsound />} />
            <Route path="/vowelsounddnd" element={<Vowelsounddnd />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
