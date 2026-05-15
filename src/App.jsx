import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './client'
import '@picocss/pico'
import Stars from './components/stars'
import { Sparkles, Users, PlusCircle } from 'lucide-react'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/showCreators'

function App() {
  const [creators, setCreators] = useState([])
  const [activeView, setActiveView] = useState('creators')

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase.from('creators').select()
      if (error) {
        console.error('Error fetching creators:', error.message)
      } else {
        setCreators(data)
      }
    }
    getCreators()
  }, [])

  return (
    <Stars>
      <main className="container">
        <section className="header">

          <h1>
            <Sparkles size={28} />
            Creatorverse
            <Sparkles size={28} />
          </h1>

          <div className="header-buttons">
            <button
              className={`header-btn${activeView === 'creators' ? ' active' : ''}`}
              onClick={() => setActiveView('creators')}
            >
              <Users size={16} />
              View Creators
            </button>
            <button
              className={`header-btn${activeView === 'add' ? ' active' : ''}`}
              onClick={() => setActiveView('add')}
            >
              <PlusCircle size={16} />
              Add Creator
            </button>
          </div>

        </section>
      </main>

      <div className="wavy">
        {/* Background only — mask lives here, never touches content */}
        <div className="wavy-bg" />

        {/* Content — no mask, full width, padding clears cloud edge */}
        <div className="wavy-content">
          {activeView === 'add'
            ? <AddCreator />
            : <ShowCreators creators={creators} />
          }
        </div>
      </div>
    </Stars>
  )
}

export default App