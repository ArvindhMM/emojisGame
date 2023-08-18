// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emoji

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="listItem">
      <button
        type="button"
        className="cardContainerButton"
        onClick={onClickEmojiCard}
      >
        <img src={emojiUrl} className="emojiImage" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
