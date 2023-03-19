const getQuestion = (quizData) => {
  // It will return answer number, type and question and options

  if (quizData) {
    // country name to ask among the given countries
    const questionNum = Math.floor(Math.random() * quizData.length)

    //  question type for country
    const questionTypes = ["capital", "currency", "flag"]
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)]

    let question
    let countryCode
    let options = quizData.map(item => {
      if (item) {
        return item.name
      }
    })

    if (quizData[questionNum]) {
      if (type === "flag") {
        question = "Which country does this flag belong to?"
        countryCode = quizData[questionNum].code.toLowerCase()
      }
      else if (type === "currency") {
        question = quizData[questionNum].currency.name + " is the currency of"
      }
      else {
        question = quizData[questionNum].capital + " is the capital of"
      }
    }

    const questionData = {
      "countryCode": countryCode,
      "question": question,
      "answerNum": questionNum,
      "options": options,
    }

    return questionData
  }
}


export default getQuestion