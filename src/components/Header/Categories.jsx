function Categories() {
  return (
    <div className="flex h-full items-center border-l border-gray-200">
      <button className="flex h-full w-[200px] items-center justify-between px-5 text-sm font-medium text-gray-700">
        <span>All Categories</span>

        <span className="text-xs">
          ▼
        </span>
      </button>
    </div>
  )
}

export default Categories