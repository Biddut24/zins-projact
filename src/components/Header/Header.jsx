import Logo from "./Logo";
import Categories from "./Categories";
import SearchBox from "./SearchBox";
const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto h-20 px4 flex items-center gap-17">
        <div className="flex items-center gap-8">
          <Logo />
        </div>
        <div className="flex items-center ">
          <Categories />
          <SearchBox />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
