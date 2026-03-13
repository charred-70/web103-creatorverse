import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes } from 'react-router-dom';
import { supabase } from './client';
import '@picocss/pico';
import Stars from './components/stars';


function App() {
  return (

    <>
      <Stars>
        <main className="container">
          <nav>
            <ul>
              <li><strong>My Pico App</strong></li>
            </ul>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#" role="button">Login</a></li>
            </ul>
          </nav>

          <section>
            <h1>Welcome to React + Pico</h1>
            <p>Pico styles standard elements automatically. No complex classes needed!</p>


          </section>

        </main>

        <section class="wavy">
          <div class="wrapper">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum, perspiciatis a illo veniam ratione expedita assumenda laboriosam modi error maiores fugit soluta vitae temporibus voluptatum ducimus culpa similique quaerat?</p>
          </div>
        </section>
      </Stars>
    </>
  );
}

export default App;
