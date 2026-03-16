import { useState, useEffect } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom';
import { supabase } from './client';
import '@picocss/pico';
import Stars from './components/stars';
import { Sparkles } from 'lucide-react';
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/showCreators'
import ViewCreator from './pages/ViewCreator'



function App() {
  const [creators, setCreators] = useState([]);
  const [showCreators, setShowCreators] = useState(false);
  const [showAddCreators, setShowAddCreators] = useState(false);

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select();

      if (error) {
        console.error("Error fetching creators:", error.message);
      } else {
        setCreators(data);
      }
    };

    getCreators();
  }, []);

  function showAddScreen() {
    setShowAddCreators(!showAddCreators)
    setShowCreators(false)
  }

  function showClick() {
    setShowCreators(!showCreators)
    setShowAddCreators(false)
  }

  return (

    <>
      <Stars>
        <main className="container">


          <section class="header">
            <h1><Sparkles /> Creatorverse <Sparkles /></h1>
            <button class="button" onClick={() => showClick()}>View All Creators</button>
            <button class="button" onClick={() => showAddScreen()}>Add Creator</button>
          </section>

        </main>

        <section class="wavy">
          <div class="wrapper">
            {showAddCreators ? (
              <AddCreator />
            ) : (
              <ShowCreators creators={creators} />
            )}
          </div>
        </section>
      </Stars>
    </>
  );
}

export default App;
