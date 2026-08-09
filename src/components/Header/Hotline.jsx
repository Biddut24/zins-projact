function Hotline() {
  return (
    <div className="ml-8 flex items-center gap-3">

      {/* Phone Icon */}
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-gray-200">
        <span className="text-lg">
          ☎
        </span>
      </div>

      {/* Hotline Text */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          Hotline:
        </span>

        <span className="text-sm font-bold text-gray-900">
          +(402) 763 282 46
        </span>
      </div>

    </div>
  )
}

export default Hotline