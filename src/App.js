//import logo from './logo.svg';
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Explore from "./Pages/Explore";
import Notifications from "./Pages/Notifications";
import Message from "./Pages/Message";
import Bookmarks from "./Pages/Bookmarks";
import Lists from "./Pages/Lists";
import Profile from "./Pages/Profile";
function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div className="app">
      {!isMobile && <Sidebar />}

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/message" element={<Message />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!isMobile && <Widgets />}
    </div>
  );
}

export default App;
