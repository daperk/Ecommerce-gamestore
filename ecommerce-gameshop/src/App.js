import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import Main from "./pages/Main";

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState([]);
  const [myBag, setMyBag] = useState([]);

  return (
    <AppContext.Provider value={{library, setLibrary, myBag, setMyBag}}>
      <Main />
    </AppContext.Provider>
  );
}

export default App;
