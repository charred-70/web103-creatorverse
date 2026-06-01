import React from 'react'
import { Youtube, Twitter, Instagram } from 'lucide-react'

const ViewCreator = ({ creator }) => {
    const {
        name,
        imageURL,
        description,
        YouTube: youtubeUrl,
        Twitter: twitterUrl,
        Instagram: instagramUrl
    } = creator

    return (
        <div className="view-creator">
            <img src={imageURL} alt={name} onError={(e) => { e.target.style.display = 'none' }} />
            <h2>{name}</h2>
            {description && <p>{description}</p>}
            <div className="card-links">
                {youtubeUrl && <a href={youtubeUrl} target="_blank" rel="noreferrer"><Youtube size={12} />YouTube</a>}
                {twitterUrl && <a href={twitterUrl} target="_blank" rel="noreferrer"><Twitter size={12} />Twitter</a>}
                {instagramUrl && <a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={12} />Instagram</a>}
            </div>
        </div>
    )
}

export default ViewCreator