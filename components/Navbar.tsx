import { FaUser, FaShoppingCart, FaBars, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center space-x-8">
      <div>
        <h1 className="font-semibold text-5xl dark:text-white">
          h&prime;ug shop <span className="text-sm">v1.0</span>
        </h1>
      </div>

      <div className="flex justify-end items-center space-x-2 bg-gray-100 dark:bg-gray-700 shadow-md p-2 rounded-xl">
        <NavIcon>
          <FaUser className="w-6 h-6 dark:text-gray-200" />
        </NavIcon>
        <NavIcon>
          <FaShoppingCart className="w-6 h-6 dark:text-gray-200" />
        </NavIcon>
        <NavIcon>
          <FaBars className="w-6 h-6 dark:text-gray-200" />
        </NavIcon>
      </div>

      <div className="flex justify-end items-center space-x-2 bg-gray-100 dark:bg-gray-700 shadow-md p-2 rounded-xl">
        <div className="sun">
          <NavIcon>
            <FaSun className="w-6 h-6 dark:text-gray-200" />
          </NavIcon>
        </div>
        <div className="moon">
          <NavIcon>
            <FaMoon className="w-6 h-6 dark:text-gray-200" />
          </NavIcon>
        </div>
      </div>

      <script src="./theme.js"></script>
    </div>
  );
};

function NavIcon({ children }: any) {
  return (
    <div className="rounded-full h-10 w-10 flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
      {children}
    </div>
  );
}

export default Navbar;
