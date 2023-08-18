// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    const {currentScore, isGameInProgress, topScore} = this.props

    return (
      <div className="navbarContainer">
        <div className="gamenameAndLogo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scoresContainer">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    )
  }
}
export default NavBar
