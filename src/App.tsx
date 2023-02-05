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
        <div class='text flex justify-center'>
          <h1 class='text-alm text-3xl font-medium mt-[30%]
                     font-arapey tracking-wider'>
            We Uphold Your Freedom
          </h1>
        </div>
      </section>

      <section id='about flex-col-reverse'>
        <div class='text m-4 h-1/2 h-full'>
          <h1>Who we Are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales ipsum, at tincidunt mi. Integer iaculis arcu quam, et bibendum nisl viverra sed. Donec elit lacus, ullamcorper a fringilla vel, dictum cursus sapien. Duis in ex ac mi bibendum varius at quis magna. Donec pharetra purus sem, bibendum bibendum massa dignissim ac. Sed sollicitudin nulla eget dolor mattis blandit. Ut eu ultrices turpis. Donec vel congue sem. Aliquam nec ligula in eros ornare auctor eu auctor nibh. Ut vitae enim metus. Aenean sodales fermentum nulla, sed auctor orci vehicula vitae. Proin aliquam aliquet dapibus. Nullam ut orci nibh. Pellentesque eu diam condimentum, viverra ligula ac, lobortis justo. Curabitur suscipit nunc non lectus fermentum, suscipit hendrerit lectus faucibus.
          </p>
        </div>

        <div class='img h-1/2 w-full'>
          <For each={Array(7)}>{(a, i) => 
            <img src={`images/gallery/${i()}.jpg`}/>
          }</For>
        </div>
      </section>

      <section id='gallery'>
        <h1>Our Partners</h1>
        <div class='list'>
          <For each={Partners}>{per => 
            <ImageDescription title={per.name} text={per.text} img={per.img}/>
          }</For>
        </div>
      </section>
      
      <section id='contact'>
        <h1>Find a Lawyer</h1>
        <div>
          <form>
            <input type='text'/>
            <input type='submit' value='test'/>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
