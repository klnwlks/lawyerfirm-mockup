import type { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <nav class='header bg-rbl h-[7vh] w-screen fixed z-50'>
      <img />
      <ul class='list'>
        <li>Home</li> 
        <li>About</li> 
        <li>Partners</li> 
        <li>Contact</li> 
      </ul>
    </nav>
  )
}

export default Header;