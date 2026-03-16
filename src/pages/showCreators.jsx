import React from 'react'

const showCreators = ({ creators }) => {
    return (
        <div>{creators && creators.length > 0 ? (
            creators.map((creator) => (
                <div key={creator.id}>
                    <h3>hey</h3>
                </div>
            ))
        ) : (
            <div>
                <p>No creators D:</p>
            </div>
        )}</div>
    )
}

export default showCreators