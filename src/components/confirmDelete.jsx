import React from 'react'

const ConfirmDelete = ({ creatorName, onConfirm, onCancel }) => {
    return (
        <div className="confirm-overlay">
            <div className="confirm-box">
                <p className="confirm-title">Delete {creatorName}?</p>
                <p className="confirm-desc">This can't be undone.</p>
                <div className="confirm-actions">
                    <button className="card-btn edit" onClick={onCancel}>Cancel</button>
                    <button className="card-btn delete" onClick={onConfirm}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDelete