import React from 'react'
import CreatorCard from '../components/contentCreator.jsx'

const ShowCreators = ({ creators, onView, onEdit, onDelete }) => {
    if (!creators || creators.length === 0) {
        return (
            <p className="cards-empty">
                No creators yet... add one to get started!
            </p>
        )
    }

    return (
        <div className="cards-grid">
            {creators.map((creator) => (
                <CreatorCard key={creator.id} creator={creator} onView={onView} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default ShowCreators