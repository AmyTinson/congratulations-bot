const keyPhrases = require('../data/keyPhrases')

const checkForKeyPhrase = (userMessageContent) => {
  let match = false

  const caseInsensitiveUserMessage = userMessageContent.toLowerCase()

  const checkForPhrase = () => {
    keyPhrases.array.forEach(phrase => {
      if (caseInsensitiveUserMessage.includes(phrase)) {
        match = true
      }
    })
  }
  checkForPhrase()

  const checkForRegexMatch = () => {
    const isALevelUpCongrats = caseInsensitiveUserMessage.match(keyPhrases.levelRegex)
    const isAnOddlyFormattedCongratsMessage = caseInsensitiveUserMessage.match(keyPhrases.congratSpacedOutRegex)

    if (isALevelUpCongrats || isAnOddlyFormattedCongratsMessage) {
      match = true
    }
  }
  checkForRegexMatch()

  return match
}

module.exports.checkForKeyPhrase = checkForKeyPhrase
