// TODO - consolidate funcs files and write tests

const axios = require('axios')

const getRandomTenorGifs = async (query, key) => {
  const randomTenorGifsRequest = await axios(`https://g.tenor.com/v1/random?q=${query}&key=${key}&limit=3`)
  const randomTenorGifs = await randomTenorGifsRequest.data.results
  return randomTenorGifs
}

module.exports.getRandomTenorGifs = getRandomTenorGifs
