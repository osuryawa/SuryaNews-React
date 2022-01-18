import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3d3d3d';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={6} country={"in"} category={"general"}  mode={mode} />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={6} country={"in"} category={"business"} mode={mode}/>} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={6} country={"in"} category={"entertainment"} mode={mode} />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={6} country={"in"} category={"health"} mode={mode} />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={6} country={"in"} category={"science"} mode={mode} />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={6} country={"in"} category={"sports"} mode={mode} />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={6} country={"in"} category={"technology"} mode={mode} />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App;