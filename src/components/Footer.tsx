
import type { Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <footer id='footer' class='p-4 pr-6 flex justify-between
                               text-white bg-rbl'>
      <div>
        <img />
        <p>Copyright 202X</p>
      </div>

      <div>
        <p class='text-xl'>Links</p>
        <ul class='pl-1'>
          <li>Facebook</li>
          <li>Insta</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;