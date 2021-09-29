// TODO - consolidate funcs files and write tests

const getRandomNumber = (array) => {
  return Math.floor(Math.random() * array.length)
}

module.exports.getRandomNumber = getRandomNumber
