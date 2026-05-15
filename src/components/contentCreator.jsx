import React from 'react'
import { Youtube, Twitter, Instagram } from 'lucide-react'

const CreatorCard = ({ creator }) => {
    const { name, img, description, youtube, twitter, instagram } = creator

    return (
        <div className="creator-card">
            <img
                className="card-avatar"
                src={img}
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
                    {youtube && (
                        <a
                            className="card-link"
                            href={youtube}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Youtube size={12} />
                            YouTube
                        </a>
                    )}
                    {twitter && (
                        <a
                            className="card-link"
                            href={twitter}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Twitter size={12} />
                            Twitter
                        </a>
                    )}
                    {instagram && (
                        <a
                            className="card-link"
                            href={instagram}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Instagram size={12} />
                            Instagram
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreatorCard