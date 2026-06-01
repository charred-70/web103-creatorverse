import React from 'react'
import { Youtube, Twitter, Instagram } from 'lucide-react'

const CreatorCard = ({ creator, onView, onEdit, onDelete }) => {
    console.log(creator)
    const {
        name,
        imageURL,
        description,
        YouTube: youtubeUrl,
        Twitter: twitterUrl,
        Instagram: instagramUrl
    } = creator

    return (
        <div className="creator-card" onClick={() => onView(creator)}>
            <img
                className="card-avatar"
                src={imageURL}
                alt={name}
                onError={(e) => {
                    e.target.style.display = 'none'
                }}
            />
            <div className="card-body">
                <p className="card-name">{name}</p>
                {description && (
                    <p className="card-desc">{description}</p>
                )}
                <div className="card-links">
                    {youtubeUrl && (
                        <a
                            className="card-link"
                            href={youtubeUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Youtube size={12} />
                            YouTube
                        </a>
                    )}
                    {twitterUrl && (
                        <a
                            className="card-link"
                            href={twitterUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Twitter size={12} />
                            Twitter
                        </a>
                    )}
                    {instagramUrl && (
                        <a
                            className="card-link"
                            href={instagramUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Instagram size={12} />
                            Instagram
                        </a>
                    )}
                </div>
                <div className="card-divider" />
                <div className="card-actions">
                    <button className="card-btn edit" onClick={e => { e.stopPropagation(); onEdit(creator) }}>Edit</button>
                    <button className="card-btn delete" onClick={e => { e.stopPropagation(); onDelete(creator) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CreatorCard