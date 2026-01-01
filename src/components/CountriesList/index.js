import './index.css'

const CountriesList = props => {
  const {detail, onVisit} = props
  const {id, name, isVisited} = detail

  const addToVisited = () => {
    onVisit(id)
  }
  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          type="button"
          className="not-visited-btn"
          onClick={addToVisited}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
