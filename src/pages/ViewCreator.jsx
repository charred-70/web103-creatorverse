import React, { useState } from 'react'
import { Youtube, Twitter, Instagram } from 'lucide-react'
import ConfirmDelete from '../components/confirmDelete'

const ViewCreator = ({ creator, onEdit, onDelete }) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const {
        name,
        imageURL,
        description,
        YouTube: youtubeUrl,
        Twitter: twitterUrl,
        Instagram: instagramUrl
    } = creator

    return (
        <div className="view-wrapper">
            {showConfirm && (
                <ConfirmDelete
                    creatorName={name}
                    onConfirm={() => onDelete(creator)}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
            <div className="view-card">
                <div className="view-image-wrap">
                    <img
                        className="view-avatar"
                        src={imageURL}
                        alt={name}
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                </div>
                <div className="view-body">
                    <h2 className="view-name">{name}</h2>
                    {description && <p className="view-desc">{description}</p>}

                    <div className="view-links">
                        {youtubeUrl && (
                            <a className="view-link youtube-link" href={youtubeUrl} target="_blank" rel="noreferrer">
                                <Youtube size={16} />
                                <span>{youtubeUrl.replace('https://', '')}</span>
                            </a>
                        )}
                        {twitterUrl && (
                            <a className="view-link twitter-link" href={twitterUrl} target="_blank" rel="noreferrer">
                                <Twitter size={16} />
                                <span>{twitterUrl.replace('https://', '')}</span>
                            </a>
                        )}
                        {instagramUrl && (
                            <a className="view-link instagram-link" href={instagramUrl} target="_blank" rel="noreferrer">
                                <Instagram size={16} />
                                <span>{instagramUrl.replace('https://', '')}</span>
                            </a>
                        )}
                    </div>

                    <div className="view-spacer" />
                    <div className="card-divider" />
                    <div className="card-actions">
                        <button className="card-btn edit" onClick={() => onEdit(creator)}>Edit</button>
                        <button className="card-btn delete" onClick={() => setShowConfirm(true)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCreator