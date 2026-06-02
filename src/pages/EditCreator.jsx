import React, { useState } from 'react'
import { supabase } from '../client'
import ConfirmDelete from '../components/confirmDelete'
const EditCreator = ({ creator, setCreators, onBack, onDelete }) => {
    const [formData, setFormData] = useState({ ...creator })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showConfirm, setShowConfirm] = useState(false)

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async () => {
        setLoading(true)
        setError(null)

        const { data, error } = await supabase
            .from('creators')
            .update(formData)
            .eq('id', creator.id)
            .select()

        if (error) {
            setError(error.message)
        } else {
            setCreators(prev => prev.map(c => c.id === creator.id ? data[0] : c))
            onBack()
        }

        setLoading(false)
    }

    return (
        <section className="form-section">
            {showConfirm && (
                <ConfirmDelete
                    creatorName={creator.name}
                    onConfirm={() => onDelete(creator)}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
            <div className="field-group">
                <p className="field-label">Name</p>
                <input name="name" type="text" value={formData.name} onChange={handleChange} />
            </div>
            <div className="field-group">
                <p className="field-label">Image URL</p>
                <input name="imageURL" type="text" value={formData.imageURL} onChange={handleChange} />
            </div>
            <div className="field-group">
                <p className="field-label">Description</p>
                <input name="description" type="text" value={formData.description} onChange={handleChange} />
            </div>
            <div className="field-group">
                <p className="field-label">YouTube</p>
                <input name="youtube" type="text" value={formData.YouTube} onChange={handleChange} />
            </div>
            <div className="field-group">
                <p className="field-label">Twitter</p>
                <input name="twitter" type="text" value={formData.Twitter} onChange={handleChange} />
            </div>
            <div className="field-group">
                <p className="field-label">Instagram</p>
                <input name="instagram" type="text" value={formData.Instagram} onChange={handleChange} />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className="form-submit" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button className="card-btn delete" onClick={() => setShowConfirm(true)}>
                Delete Creator
            </button>
        </section>
    )
}

export default EditCreator