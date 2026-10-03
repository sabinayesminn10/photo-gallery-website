import { useState } from "react";
import { Camera, Search, Moon, Sun, Menu, X } from "lucide-react";

const Header = ({
  search,
  setSearch,
  album,
  setAlbum,
  darkMode,
  setDarkMode,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={
        darkMode
          ? "sticky top-0 z-50 border-b border-gray-800 bg-gray-950"
          : "sticky top-0 z-50 border-b border-gray-200 bg-white"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-600 p-2 text-white">
            <Camera size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold sm:text-xl">Pixel Gallery</h1>

            <p
              className={
                darkMode
                  ? "hidden text-sm text-gray-400 sm:block"
                  : "hidden text-sm text-gray-500 sm:block"
              }
            >
              Beautiful moments, captured forever.
            </p>
          </div>
        </div>

        {/* Desktop controls */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search photos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={
                darkMode
                  ? "w-52 rounded-lg border border-gray-700 bg-gray-900 py-2 pl-10 pr-3 text-white outline-none"
                  : "w-52 rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 outline-none"
              }
            />
          </div>

          {/* Album Filter */}
          <select
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className={
              darkMode
                ? "rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white outline-none"
                : "rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none"
            }
          >
            <option value="all">All Albums</option>
            <option value="1">Album 1</option>
            <option value="2">Album 2</option>
            <option value="3">Album 3</option>
            <option value="4">Album 4</option>
            <option value="5">Album 5</option>
            <option value="6">Album 6</option>
            <option value="7">Album 7</option>
            <option value="8">Album 8</option>
            <option value="9">Album 9</option>
            <option value="10">Album 10</option>
          </select>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={
              darkMode
                ? "rounded-lg bg-gray-800 p-2 text-yellow-400"
                : "rounded-lg bg-gray-100 p-2 text-gray-700"
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 md:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 p-4 md:hidden">
          {/* Search */}
          <input
            type="text"
            placeholder="Search photos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={
              darkMode
                ? "mb-3 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white"
                : "mb-3 w-full rounded-lg border border-gray-300 px-4 py-3"
            }
          />

          {/* Album */}
          <select
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className={
              darkMode
                ? "mb-3 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white"
                : "mb-3 w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
            }
          >
            <option value="all">All Albums</option>
            <option value="1">Album 1</option>
            <option value="2">Album 2</option>
            <option value="3">Album 3</option>
            <option value="4">Album 4</option>
            <option value="5">Album 5</option>
            <option value="6">Album 6</option>
            <option value="7">Album 7</option>
            <option value="8">Album 8</option>
            <option value="9">Album 9</option>
            <option value="10">Album 10</option>
          </select>

          {/* Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-white"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}

            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
