const NavBar = () => {
  return (
    <nav>
        <ul className="flex flex-row justify-between items-center p-4">
            <li className="text-2xl font-bold">Logo</li>
            <li className="text-xl">About</li>
            <li className="text-xl">Projects</li>
            <li className="text-xl">Contact</li>
        </ul>
    </nav>
  );
};

export default NavBar;
