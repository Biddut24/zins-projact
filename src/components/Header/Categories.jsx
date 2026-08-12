import { useState } from "react";

const Categories = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="w-56 h-12 border border-gray-300 rounded-l-full px-5 flex items-center justify-between">
        <span>All Categories</span>
        
         <span>{open ? "▲" : "▼"}</span>
      </button>



      {open && (
    <div className="absolute top-14 left-0 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
      <ul>
        <li className="px-4 py-2 bg-gray-300 text-white cursor-pointer">
          All Categories
        </li>

        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
          Fashion
        </li>

        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
          Electronics
        </li>

        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
          Fashion & Beauty
        </li>

        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
          Jewelry
        </li>

        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
          Grocery
        </li>
      </ul>
    </div>
  )}
    </div>
  );
};

export default Categories;