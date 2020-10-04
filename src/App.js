import React from "react";
import "./App.css";
import AV from "leancloud-storage";

import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  const APP_ID = "9RNuNy8A0lQHs9bUcGY5pJXY-gzGzoHsz";
  const APP_KEY = "rIVSn0eenFRz2FrvCXvag58d";

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    serverURL: "https://9rnuny8a.lc-cn-n1-shared.com",
  });

  return (
    <div className="App">
      <header className="App-header"></header>
      <SearchBar />
      <SearchResult />
    </div>
  );
}

export default App;
