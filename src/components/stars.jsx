import { useMemo } from 'react'

const generateStars = (count, tint = '#FFF') => {
    let shadow = ''
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000)
        const y = Math.floor(Math.random() * 2000)
        shadow += `${x}px ${y}px ${tint}${i === count - 1 ? '' : ','}`
    }
    return shadow
}

const Stars = ({ children }) => {
    const starsSmall = useMemo(() => generateStars(500, '#FFF'), [])
    const starsMid = useMemo(() => generateStars(150, 'rgba(220, 235, 255, 0.85)'), [])
    const starsLarge = useMemo(() => generateStars(40, 'rgba(255, 250, 230, 0.95)'), [])

    return (
        <div className="star-container">

            <div className="nebula nebula-1" />
            <div className="nebula nebula-2" />
            <div className="nebula nebula-3" />

            <div id="stars" style={{ boxShadow: starsSmall }} />

            <div id="stars2" style={{ boxShadow: starsMid }} />

            <div id="stars3" style={{ boxShadow: starsLarge }} />

            <div className="horizon-grid" />
            <div className="shimmer-line" />

            <div className="content">
                {children}
            </div>

        </div>
    )
}

export default Stars