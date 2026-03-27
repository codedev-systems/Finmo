import header_styles from './Header.module.css';
import { IoMenu } from "react-icons/io5";

var menuIsOpen = false;

function showHiddenMenu(){
  let menu_text = document.getElementById("menu-text")
  let menu_icon = document.getElementById("menu-icon")
  let menu = document.getElementById("menu")
  
  if(menuIsOpen){
    menu_text.classList.remove("text-purple-700")
    menu_text.classList.add("text-gray-800")
    menu_icon.classList.remove("text-purple-700")
    menu_icon.classList.add("text-gray-800")
    menu.classList.remove("active")
  }
  else{
    menu_text.classList.remove("text-gray-800")
    menu_text.classList.add("text-purple-700")
    menu_icon.classList.remove("text-gray-800")
    menu_icon.classList.add("text-purple-700")
    menu.classList.add("active")
  }

  menuIsOpen = !menuIsOpen
}

function Header(){
  return (
    <header className="{header_styles.header} w-full h-[80px] sm:h-[90px] lg:h-[120px]">
      <section className='w-full flex flex-row'>
        <section onClick={showHiddenMenu} className="grid grid-cols-2 w-[100px] items-center ms-2 sm:ms-5 lg:ms-20 cursor-pointer">
          <IoMenu id="menu-icon" className='text-[40px] sm:text-[45px] lg:text-[50px] text-gray-800'/>
          <p id="menu-text" className="sm:ms-2 text-gray-800">Menu</p>
        </section>
        <section className="flex py-4 w-[50%] sm:w-[80%] justify-center">
          <img src="logos/logo.webp" className="w-[80px] sm:w-[100px] lg:w-[130px]"/>
        </section>
      </section>
    </header>
  )
}

export default Header;