import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TexForm';
import About from './components/About';
import NoPage from './components/NoPage';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";


// let name = "<h1>Junaid</h1>";

function App() {
  const [mode, setDarkMode] = useState('light') //whether dark mode is enabled of not 

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setInterval(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode is enabled", "success");
      document.title = 'text util - Dark Mode'

    }
    else {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");

      document.title = 'text util - Light mode'
    }
  }
  return (

    <Router>
      <Navbar title="textUitls" about='About' mode={mode} toggleMode={toggleMode} ></Navbar>

      <Alert alert={alert}></Alert>

      <Routes>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/" element={<TextForm heading="Enter the text analyze" mode={mode} showAlert={showAlert}></TextForm>}>
        </Route>
        <Route path="*" element={<NoPage />}>
        </Route>

      </Routes>





    </Router>



  );
}

export default App;
