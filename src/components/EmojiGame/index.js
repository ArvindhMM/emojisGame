/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedList: [], isGameInProgress: true, topScore: 0}

  getshuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    this.setState({clickedList: [], isGameInProgress: true})
  }

  ScoreCard = () => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isWon = clickedList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedList.length}
      />
    )
  }

  finishAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isEmojiPresent = clickedList.includes(id)
    const clickedListLength = clickedList.length

    if (isEmojiPresent) {
      this.finishAndSetTopScore(clickedListLength)
    } else {
      if (emojisList.length - 1 === clickedListLength) {
        this.finishAndSetTopScore(emojisList.length)
      }
      this.setState(prevstate => ({
        clickedList: [...prevstate.clickedList, id],
      }))
    }
  }

  EmojisList = () => {
    const shuffledEmojisList = this.getshuffledEmojisList()

    return (
      <ul className="emojisContainer">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emoji={eachEmoji}
            key={eachEmoji.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, clickedList, topScore} = this.state

    return (
      <div>
        <NavBar
          currentScore={clickedList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="gameContainer">
          {isGameInProgress ? this.EmojisList() : this.ScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
