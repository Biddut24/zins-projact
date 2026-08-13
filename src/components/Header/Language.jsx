import { useState,useEffect, useRef } from "react"

function Language() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
     if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
        ) {
      setOpen(false);
    } 
  };
    document.addEventListener("click", handleClickOutside);
     return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  return (
    <div ref={dropdownRef}  className="relative ml-7 ">

      <button
        onClick={() => setOpen(!open)}
        className="flex h-[42px] items-center gap-4 rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-800 cursor-pointer"
      >
        <span>English</span>

         <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-[140px] rounded-md border border-gray-100 bg-white p-2 shadow-lg">

          <button className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-gray-100 cursor-pointer">
            English
          </button>

          <button className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-gray-100 cursor-pointer">
            বাংলা
          </button>

        </div>
      )}

    </div>
  )
}

export default Language