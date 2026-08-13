import { PhoneCall } from "lucide-react";
const Hotline = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
        <PhoneCall className="w-5 h-5 group-hover:text-orange-500 duration-300"size={16} />
      </div>

     <div className="flex items-center gap-2 whitespace-nowrap">
       <p className="text-sm text-gray-500 group-hover:text-orange-500 duration-300">
        
        </p>

        <h3 className="text-lg font-bold group-hover:text-orange-500 duration-300">
          +(402) 763 282 46
        </h3>
      </div>
    </div>
  );
};

export default Hotline;