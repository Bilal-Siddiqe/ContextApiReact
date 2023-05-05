import React from "react";
import Main from './components/Main'
import Footer from './components/Footer'
import useAuth from './hooks/useAuth'

function App() {

  const { auth, setAuth } = useAuth();

  function chng(){
    setAuth(auth+1);
  }

  return (
    <div className="App">
      <Main />
      {auth}
      <button onClick={chng}>Click me</button>
      <Footer/>

    </div>
  );
}

export default App;
