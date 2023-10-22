import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  constructor(props) {
    super(props)

    const {resources} = props
    const {emojis, loveEmojiUrl} = resources

    this.state = {
      feedbackGiven: false,
      emojis,
      loveEmojiUrl,
    }
  }

  handleFeedback = () => {
    this.setState({feedbackGiven: true})
  }

  render() {
    const {feedbackGiven, emojis, loveEmojiUrl} = this.state

    return (
      <div className="backGround">
        <div className="whiteBackground">
          {feedbackGiven ? (
            <div className="feedback">
              <img src={loveEmojiUrl} alt="love emoji" className="heart" />
              <h1>Thank you!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <div>
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <div className="emojiLine">
                {emojis.map(every => (
                  <div className="emojiContainer" key={every.name}>
                    <div className="emLine">
                      <img
                        alt="emojis"
                        className="img"
                        src={every.imageUrl}
                        onClick={this.handleFeedback}
                      />
                      <p>{every.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
