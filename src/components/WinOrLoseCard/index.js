// Write your code here.
import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageURL = isWon ? winImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winLoseContainer">
      <div className="details">
        <h1 className="gameStatus">{gameStatus}</h1>
        <p className="scoreLabel">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button className="button" type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="imageContainer">
        <img src={imageURL} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
