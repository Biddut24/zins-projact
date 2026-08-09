function SearchBox() {
  return (
    <div className="flex h-[48px] flex-1 items-center rounded-full bg-gray-100">

      <input
        type="text"
        placeholder="Search your product..."
        className="h-full flex-1 bg-transparent px-5 text-sm outline-none placeholder:text-gray-400"
      />

      <button className="mr-1 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-900 text-white">
        🔍
      </button>

    </div>
  )
}

export default SearchBox