import Logo from "./Logo"
import Categories from "./Categories"
    import SearchBox from "./SearchBox"
    import Hotline from "./Hotline"
    import Language from "./Language"
    import Currency from "./Currency"
function Header() {
  return (
    <header className="w-full bg-white">
      
      <div className="mx-auto flex h-[90px] items-center px-[70px]">
        
        <Logo />
         <Categories />
         <SearchBox/>
        <Hotline />
        <Language />
        <Currency />
     

      </div>

    </header>
  )
}

export default Header