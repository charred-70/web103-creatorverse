import { useMemo } from 'react';

const stars = (count) => {
    let shadowString = "";
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        shadowString += `${x}px ${y}px #FFF${i === count - 1 ? "" : ","}`;
    }
    return shadowString;
}

const Stars = ({ children }) => {
    // Generate random box-shadows once on mount
    const starShadows = useMemo(() => stars(500), []);
    return (
        <div className="star-container">
            <div id="stars" style={{ boxShadow: starShadows }} />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Stars;
