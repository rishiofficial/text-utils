import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [node, setNode] = useState('light');

  const showAlert = (message, type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
  }
  const toggleNew = ()=>{
    if(node === 'light'){
      setNode('dark');
      document.body.style.backgroundColor = '#5aae58';
     
    }
    else{
      setNode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
<Navbar  title="Textutils" mode={mode} toggleMode={toggleMode} toggleNew={toggleNew}/>
<Alert alert={alert}/>
<div className="container my-3" >
<Textform heading = "Enter the text to analyze" mode={mode}/>
</div>
 </>
  );
}

export default App;
