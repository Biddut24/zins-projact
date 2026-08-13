import Logo from "./Logo";
import Categories from "./Categories";
import SearchBox from "./SearchBox";
import Hotline from "./Hotline";
import Language from "./Language";
import Currency from "./Currency";
const Navbar = () => {
  return (
 <nav className="w-full bg-gray-50">
<div className="w-full px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
      <div className="flex items-center">
          <Categories />
         
          <div className="flex items-center gap-5">
             <SearchBox />
            <Hotline />
            <Language />
            <Currency />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
