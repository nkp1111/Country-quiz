const getCountryData = async () => {
  // to get json data for countries 
  const baseurl = "https://gist.githubusercontent.com/amitjambusaria/b9adebcb4f256eae3dfa64dc9f1cc2ef/raw/6431d72439c8399b05d2b8e9d51153e5dee7ad3b/countries.json"
  return fetch(baseurl)
    .then(res => res.json())
    .then(data => data)
}

const getQuizData = ({ countryData, options = 4 }) => {
  // randomly get data of country same as options defaults 4
  if (options > 6) {
    options = 6
  }

  if (options <= 0) {
    options = 1
  }

  if (countryData) {
    const countryCount = countryData.length
    let quizData = []
    for (let i = 0; i < options; i++) {
      const randomInt = Math.floor(Math.random() * countryCount)
      console.log(countryData[randomInt]);
      quizData.push(countryData[randomInt])
    }
    console.log(quizData);
    return quizData
  }
}

export {
  getCountryData,
  getQuizData,
}

