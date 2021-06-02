const keyPhrases = require('../data/keyPhrases')

/**
 * Checks user message to see if key phrases are included
 * @param   {*string}   userMessageContent
 * @param   {*array}    keyPhrases
 * @return  {*boolean}
 */
const inputCheck = (userMessageContent) => {
  const caseInsensitiveMessage = userMessageContent.toLowerCase()

  // Conditional to determine if there is a key phrase match
  let match = false

  // Checks for key phrases
  keyPhrases.array.forEach(phrase => {
    if (caseInsensitiveMessage.includes(phrase)) {
      match = true
    }
  })

  // Checks for level up
  if (caseInsensitiveMessage.match(keyPhrases.regex)) {
    match = true
  }

  return match
}

module.exports.inputCheck = inputCheck
