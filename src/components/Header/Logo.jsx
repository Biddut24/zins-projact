import logo from "../../assets/Logo.png";
const Logo = () =>{
  return (
    <div className="flex items-center p-10 cursor-pointer">
  <img 
  src={logo}
   alt="Zenis Logo" 
  className="w-30 object-contain shrink-0"
  />
  

  
</div>
  )
}

export default Logo;