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

            <div className="grid">
              <article>
                <header>Card Header</header>
                This is a card created using the <code>&lt;article&gt;</code> tag.
                <footer>
                  <button className="secondary">
                    Secondary Action
                  </button>
                </footer>
              </article>

              <article>
                <header>Form Example</header>
                <form>
                  <input type="text" placeholder="Enter your name" aria-label="Name" />
                  <button type="submit">Submit</button>
                </form>
              </article>
            </div>
          </section>

        </main>
      </Stars>
    </>
  );
}

export default App;
