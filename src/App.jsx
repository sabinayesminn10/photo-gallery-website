import { useState } from "react";
import Header from "./components/Header";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [album, setAlbum] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-950 text-white"
          : "min-h-screen bg-gray-50 text-gray-900"
      }
    >
      <Header
        search={search}
        setSearch={setSearch}
        album={album}
        setAlbum={setAlbum}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <PhotoGallery
        search={search}
        album={album}
        darkMode={darkMode}
      />

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;