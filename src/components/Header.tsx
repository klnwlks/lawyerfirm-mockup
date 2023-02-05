import type { Component } from 'solid-js';

const Header: Component = () => {
  let menu: HTMLUListElement;

  const menuVis = () => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden', 'opacity-0')
      menu.classList.add('opacity-100')
    } else {
      menu.classList.remove('opacity-100')
      menu.classList.add('hidden', 'opacity-0')
    }
  }

  return (
    <nav class='header bg-rbl h-[7vh] w-screen fixed z-50 text-white 
                flex justify-between items-center pr-5'>
      <img class='' />
      <a onClick={menuVis}>☰</a>
      <div class='container absolute'>
        <ul ref={menu} class='list flex flex-col hidden fixed h-screen p-4 bg-rbl
                              w-[50vw] top-0 text-xl pt-15 transition-transform
                              transition-duration-200 opacity-0'>
          <img class='mb-5'/>

          <div>
            <li class='my-4'>Home</li> 
            <li class='my-4'>About</li>
            <li class='my-4'>Partners</li> 
            <li class='my-4'>Contact</li> 
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Header;