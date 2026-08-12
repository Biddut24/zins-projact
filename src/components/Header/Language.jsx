import { useState } from "react"

function Language() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative ml-7">

      <button
        onClick={() => setOpen(!open)}
        className="flex h-[42px] items-center gap-4 rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-800"
      >
        <span>English</span>

        <span className="text-xs">
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-[140px] rounded-md border border-gray-100 bg-white p-2 shadow-lg">

          <button className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-gray-100">
            English
          </button>

          <button className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-gray-100">
            বাংলা
          </button>

        </div>
      )}

    </div>
  )
}

export default Language