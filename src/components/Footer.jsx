const Footer = ({ darkMode }) => {
  return (
    <footer
      className={
        darkMode
          ? "border-t border-gray-800 bg-gray-950"
          : "border-t border-gray-200 bg-white"
      }
    >
      <div className="mx-auto max-w-7xl px-4 py-6 text-center">
        <p
          className={
            darkMode ? "text-sm text-gray-400" : "text-sm text-gray-500"
          }
        >
          © 2026 Pixel Gallery. All rights reserved.
        </p>

        <p
          className={
            darkMode
              ? "mt-1 text-xs text-gray-500"
              : "mt-1 text-xs text-gray-400"
          }
        >
          Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
