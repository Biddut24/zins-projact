import { Search } from "lucide-react";
const SearchBox = () => {
  return (
    <div className="w-[450px] h-12 border border-gray-300 rounded-r-full flex items-center overflow-hidden">
      <input
        type="text"
        placeholder="Search your product..."
        className="w-full h-full px-5 outline-none"
      />
      <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center mr-1 hover:bg-orange-500 duration-300 cursor-pointer">
        <Search size={18} />
      </button>
    </div>
  );
};

export default SearchBox;
