import './index.css'

import {Component} from 'react'

import CountriesList from '../CountriesList'
import VisitedCountriesList from '../VisitedCountriesList'

class VisitCountries extends Component {
  constructor(props) {
    super(props)
    const {initialCountriesList} = this.props
    this.state = {countriesList: initialCountriesList}
  }

  onVisit = id => {
    const {countriesList} = this.state
    const updatedCountriesList = countriesList.map(eachCountry =>
      id === eachCountry.id ? {...eachCountry, isVisited: true} : eachCountry,
    )

    this.setState({countriesList: updatedCountriesList})
  }

  onRemove = id => {
    const {countriesList} = this.state
    const updatedCountriesList = countriesList.map(eachCountry =>
      id === eachCountry.id ? {...eachCountry, isVisited: false} : eachCountry,
    )

    this.setState({countriesList: updatedCountriesList})
  }

  render() {
    const {countriesList} = this.state
    const visitedCountriesList = countriesList.filter(
      eachCountry => eachCountry.isVisited === true,
    )
    return (
      <div className="app-container">
        <h1 className="heading">Countries</h1>
        <ul className="countries-list">
          {countriesList.map(eachCountry => (
            <CountriesList
              key={eachCountry.id}
              detail={eachCountry}
              onVisit={this.onVisit}
            />
          ))}
        </ul>

        <h2 className="heading">Visited Countries</h2>
        {visitedCountriesList.length === 0 ? (
          <div className="no-visit-countries-view">
            <p className="no-visited-countries">No Countries Visited Yet!</p>
          </div>
        ) : (
          <ul className="countries-list">
            {visitedCountriesList.map(eachCountry => (
              <VisitedCountriesList
                key={eachCountry.id}
                detail={eachCountry}
                onRemove={this.onRemove}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default VisitCountries
