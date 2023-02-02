import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div id='App' class='bg-alm'>
      <div class='anim text-4xl w-screen h-screen fixed 
                  flex flex-col justify-center text-center
                  bg-alm text-dnv font-bold hidden'>
        <h1>We Uphold Your Freedom</h1>
      </div>

      <section id='hero' class='h-[40vh] bg-slate-800'>
        <div class='text flex justify-center'>
          <h1 class='text-alm text-2xl font-bold mt-[20%]'>
            We Uphold Your Freedom
          </h1>
        </div>
      </section>

      <section id='about'>

      </section>

      <section id='gallery'>

      </section>
      
      <section id='contact'>

      </section>
    </div>
  );
};

export default App;
