import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'

const AddCreator = () => {
    const [formData, setFormData] = useState({
        name: '',
        image_url: '',
        description: '',
        youtube: '',
        twitter: '',
        instagram: '',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async () => {
        setLoading(true)
        setError(null)

        const { error } = await supabase
            .from('creators')
            .insert([formData])

        if (error) {
            setError(error.message)
        } else {

            setFormData({ name: '', image_url: '', description: '', youtube: '', twitter: '', instagram: '' })
        }

        setLoading(false)
    }

    return (
        <section className="form-section">

            <div className="field-group">
                <p className="field-label">Name</p>
                <input name="name" type='text' placeholder='e.g. Wemmbu'
                    value={formData.name} onChange={handleChange} />
            </div>

            <div className="field-group">
                <p className="field-label">Image URL</p>
                <input name="image_url" type='text' placeholder='https://...'
                    value={formData.image_url} onChange={handleChange} />
            </div>

            <div className="field-group">
                <p className="field-label">Description</p>
                <input name="description" type='text' placeholder='A short bio...'
                    value={formData.description} onChange={handleChange} />
            </div>

            <p className="section-title">Social Media Links</p>

            <div className="field-group">
                <p className="field-label">YouTube</p>
                <input name="youtube" type='text' placeholder='https://youtube.com/@...'
                    value={formData.youtube} onChange={handleChange} />
            </div>

            <div className="field-group">
                <p className="field-label">Twitter</p>
                <input name="twitter" type='text' placeholder='https://twitter.com/...'
                    value={formData.twitter} onChange={handleChange} />
            </div>

            <div className="field-group">
                <p className="field-label">Instagram</p>
                <input name="instagram" type='text' placeholder='https://instagram.com/...'
                    value={formData.instagram} onChange={handleChange} />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button className="form-submit" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Adding...' : 'Add Creator'}
            </button>
        </section>
    )
}

export default AddCreator