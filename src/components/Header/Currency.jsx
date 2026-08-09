function Currency() {
  return (
    <button className="ml-2 flex h-[42px] items-center gap-4 rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-800">
      <span>$USD</span>

      <span className="text-xs">
        ▼
      </span>
    </button>
  )
}

export default Currency