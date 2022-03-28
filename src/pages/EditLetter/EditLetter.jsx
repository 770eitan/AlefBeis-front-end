import { useState, useRef,useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditLetter(props) {
    const formElement = useRef()
    const [validForm, setValidForm] = useState(true)
	const location = useLocation()
	const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}
    
    const [formData, setFormData] = useState(location.state.letter)    
    useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])
    const handleSubmit = evt => {
		evt.preventDefault()
        props.handleUpdateLetter(formData)
	}
    return (
		<>
			<h1>Edit Letter</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Letter's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
                        value={formData.name}
                        onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="meaning-input" className="form-label">
						Letter's Meaning (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="meaning-input"
						name="meaning"
                        value={formData.meaning}
                        onChange={handleChange}

						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="value-input" className="form-label">
						Letter's Value
					</label>
					<input 
						type="number"
						className="form-control"
						id="value-input"
						name="value"
                        value={formData.value}
                        onChange={handleChange}

					/>
				</div>
				<div className="d-grid mb-3">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
                        disabled={!validForm}
                        
					>
						Save Letter
					</button>
				</div>
        <div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	)
}

export default EditLetter