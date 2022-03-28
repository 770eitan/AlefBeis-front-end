function LetterCard({letter,handleDeleteLetter}) {
  return(
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{letter.name}</h2>
        <p className="card-text"> Meaning:{letter.meaning}  </p>
        <p className="card-text"> Gematria:{letter.value} </p>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-danger m-left"
        onClick={()=>handleDeleteLetter(letter._id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default LetterCard