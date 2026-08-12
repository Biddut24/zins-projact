import logo from "../../assets/Logo.png";
const Logo = () =>{
  return (
    <div className="flex items-center gap-2">
  <img 
  src={logo}
   alt="Zenis Logo" 
  className="w-25 h-25 object-contain"
  />
  

  
</div>
  )
}

export default Logo;