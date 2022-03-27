import { useState, useRef, useEffect } from "react";

function AddLetter(props) {
  const formElement = useRef();
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    meaning: "",
    value: "",
  });

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);
  const handleChange = (evt) => {
    console.log(formElement);
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
	evt.preventDefault()
	props.handleAddLetter(formData)
}
  return (
    <>
      <h1>Add Letter</h1>
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
            Letter's meaning (required)
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
            Letter's value
          </label>
          <input
            type="number"
            className="form-control"
            id="value-input"
            name="value"
            onChange={handleChange}
            f
            value={formData.value}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
          >
            Add Letter
          </button>
        </div>
      </form>
    </>
  );
}

export default AddLetter;
