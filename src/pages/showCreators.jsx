import React from 'react'
import CreatorCard from '../components/contentCreator.jsx'

const ShowCreators = ({ creators }) => {
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
                <CreatorCard key={creator.id} creator={creator} />
            ))}
        </div>
    )
}

export default ShowCreators