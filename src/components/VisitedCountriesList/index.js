import './index.css'

const VisitedCountriesList = props => {
  const {detail, onRemove} = props
  const {id, imageUrl, name} = detail

  const removeFromVisited = () => {
    onRemove(id)
  }
  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-flag-img" />
      <div className="name-btn-container">
        <p className="country-name">{name}</p>
        <button
          type="button"
          className="remove-btn"
          onClick={removeFromVisited}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesList
