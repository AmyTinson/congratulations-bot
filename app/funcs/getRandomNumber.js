/**
 * @param {*} array
 * @returns A random number
 */
const getRandomNumber = (array) => {
  return Math.floor(Math.random() * array.length)
}

module.exports.getRandomNumber = getRandomNumber
