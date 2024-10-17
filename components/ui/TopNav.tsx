export default function TopNav() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-lg rounded-b-lg sticky top-0 z-20">
      <div className="font-bold text-3xl text-purple-700">ChatBotApp</div>
      <div className="flex space-x-6 text-gray-600 font-medium">
        <a
          href="#about"
          className="hover:text-purple-800 transition duration-200"
        >
          About
        </a>
        <a
          href="#docs"
          className="hover:text-purple-800 font-semibold transition duration-200"
        >
          Docs
        </a>
        <a
          href="#login"
          className="hover:text-purple-800 transition duration-200"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
