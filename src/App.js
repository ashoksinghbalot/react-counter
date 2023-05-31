// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Layout from './components/layout';
import Footer from './components/footer';

function App() {

  const [test, setTest ] = useState(true)

  const incrementCounter = () => {
    setTimeout(() => {
      setTest(false)
    }, 20000);
  }

  useEffect(() => {
    incrementCounter()
  },[test])



  return (
    <div>

    {/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

      <Layout mmyAttribute = "test" />
      {test && <Footer />}
    </div>
  );
}

export default App;
