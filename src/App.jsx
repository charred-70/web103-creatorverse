import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './client'
import '@picocss/pico'
import Stars from './components/stars'
import { Sparkles, Users, PlusCircle } from 'lucide-react'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/showCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import ConfirmDelete from './components/confirmDelete'

function App() {
  const [creators, setCreators] = useState([])
  const [activeView, setActiveView] = useState('creators')
  const [selectedCreator, setSelectedCreator] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [creatorToDelete, setCreatorToDelete] = useState(null)

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase.from('creators').select()
      console.log('data: ', data)
      console.log('error: ', error)
      if (error) {
        console.error('Error fetching creators:', error.message)
      } else {
        setCreators(data)
      }
    }
    getCreators()
  }, [])

  const goToView = (creator) => {
    setSelectedCreator(creator)
    setActiveView('view')
  }

  const goToEdit = (creator) => {
    setSelectedCreator(creator)
    setActiveView('edit')
  }

  const confirmDelete = (creator) => {
    setCreatorToDelete(creator)
    setShowConfirm(true)
  }

  const handleDelete = async () => {
    const { error } = await supabase.from('creators').delete().eq('id', creatorToDelete.id)
    if (!error) {
      setCreators(prev => prev.filter(c => c.id !== creatorToDelete.id))
      setShowConfirm(false)
      setCreatorToDelete(null)
      setActiveView('creators')
    }
  }

  return (
    <Stars>
      {showConfirm && (
        <ConfirmDelete
          creatorName={creatorToDelete?.name}
          onConfirm={handleDelete}
          onCancel={() => { setShowConfirm(false); setCreatorToDelete(null) }}
        />
      )}
      <main className="container">
        <section className="header">

          <h1>
            <Sparkles size={28} />
            Creatorverse
            <Sparkles size={28} />
          </h1>

          <div className="header-buttons">
            {activeView === 'view' || activeView === 'edit' ? (
              <button
                className="header-btn"
                onClick={() => setActiveView('creators')}
              >
                ← Back to Creators
              </button>
            ) : (
              <>
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
              </>
            )}
          </div>

        </section>
      </main>

      <div className="wavy">
        <div className="wavy-bg" />

        <div className="wavy-content">
          {activeView === 'add' && <AddCreator setCreators={setCreators} />}
          {activeView === 'creators' && <ShowCreators creators={creators} onView={goToView} onEdit={goToEdit} onDelete={confirmDelete} />}
          {activeView === 'view' && <ViewCreator creator={selectedCreator} onEdit={goToEdit} onDelete={confirmDelete} onBack={() => setActiveView('creators')} />}
          {activeView === 'edit' && <EditCreator creator={selectedCreator} setCreators={setCreators} onBack={() => setActiveView('creators')} onDelete={confirmDelete} />}
        </div>
      </div>
    </Stars>
  )
}

export default App