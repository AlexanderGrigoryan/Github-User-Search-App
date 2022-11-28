import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { useState } from "react";
import UserCard from "./components/UserCard/UserCard";

function App() {
  const [changeMode, setChangeMode] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className={changeMode ? "AppDark" : "App"}>
      <div className="container">
        <Header changeMode={changeMode} setChangeMode={setChangeMode} />
        <Search
          search={search}
          setSearch={setSearch}
          changeMode={changeMode}
          setChangeMode={setChangeMode}
        />
        {search !== "" ? (
          <UserCard
            search={search}
            setSearch={setSearch}
            changeMode={changeMode}
            setChangeMode={setChangeMode}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
