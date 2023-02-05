import type { Component } from 'solid-js';
import { For } from 'solid-js';

import Header from './components/Header';
import Footer from './components/Footer';
import Partners from './assets/partners.json'
import ImageDescription from './components/ImageDescription';

const App: Component = () => {
  return (
    <div id='App' class='bg-alm'>
      <Header />

      <div class='anim text-4xl w-screen h-screen fixed 
                  flex flex-col justify-center text-center
                  bg-alm text-dnv font-bold hidden'>
        <h1>We Uphold Your Freedom</h1>
      </div>

      <section id='hero' class='h-[40vh] bg-slate-800'>
        <div class='flex-col text-center'>
          <h1 class='text-alm text-3xl font-medium pt-[35%]
                     font-arapey tracking-wider pb-6'>
            We Uphold Your Freedom
          </h1>

          <a href='#contact' class='p-2 border-solid border-2 border-white
                                    text-white rounded-md'> 
            Find a Lawyer
          </a>
        </div>
      </section>

      <section id='about' class='flex-col-reverse py-4'>
        <div class='text m-4 h-1/2 h-full'>
          <h1 class='text-3xl pb-2'>Who we Are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales ipsum, at tincidunt mi. Integer iaculis arcu quam, et bibendum nisl viverra sed. Donec elit lacus, ullamcorper a fringilla vel, dictum cursus sapien. Duis in ex ac mi bibendum varius at quis magna. Donec pharetra purus sem, bibendum bibendum massa dignissim ac. Sed sollicitudin nulla eget dolor mattis blandit. Ut eu ultrices turpis. Donec vel congue sem. Aliquam nec ligula in eros ornare auctor eu auctor nibh. Ut vitae enim metus. Aenean sodales fermentum nulla, sed auctor orci vehicula vitae. Proin aliquam aliquet dapibus. Nullam ut orci nibh. Pellentesque eu diam condimentum, viverra ligula ac, lobortis justo. Curabitur suscipit nunc non lectus fermentum, suscipit hendrerit lectus faucibus.
          </p>
        </div>

        <div class='img h-1/2 w-full grid grid-cols-3 grid-rows-3 
                    grid-flow-dense'>
          <For each={Array(9)}>{(a, i) => 
            <img class='object-cover h-full' src={`images/gallery/${i() + 1}.jpg`}/>
          }</For>
        </div>
      </section>

      <section id='gallery' class='p-4'>
        <h1 class='text-3xl pb-2'>Our Partners</h1>
        <div class='overflow-x-scroll flex height-[60vh]'>
          <For each={Partners}>{per => 
            <ImageDescription title={per.name} text={per.text} img={per.img}/>
          }</For>
        </div>
      </section>
      
      <section id='contact' class='h-[40vh] bg-[url("images/5.jpg")]
                                   bg-center bg-cover'>
        <div class='p-4 w-full h-full backdrop-blur-sm flex-col pt-[25%] items-center'>
          <h1 class='text-3xl pb-10 text-center text-white'>Find a Lawyer</h1>
          <form class='flex justify-center items-center'>
            <input type='text' placeholder='eg. service, name, location' class='w-[80%] text-xl p-2 bg-[#fcfcfc] rounded-l-lg'/>
            <input type='submit' value='Search' class='text-xl p-2 px-3 bg-khk
                                                     text-black rounded-r-lg'/>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
