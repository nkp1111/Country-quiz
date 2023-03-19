const getQuestion = (quizData) => {
  // It will return answer number, type and question and options

  if (quizData) {
    // country name to ask among the given countries
    const questionNum = Math.floor(Math.random() * quizData.length)

    //  question type for country
    const questionTypes = ["capital", "currency", "flag"]
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)]

    let questionItem
    let options = quizData.map(item => {
      if (item) {
        return item.name
      }
    })

    if (quizData[questionNum]) {
      if (type === "flag") {
        questionItem = quizData[questionNum].flag
      }
      else if (type === "currency") {
        questionItem = quizData[questionNum].currency.name
      }
      else {
        questionItem = quizData[questionNum].capital
      }
    }

    const question = {
      "type": type,
      "questionItem": questionItem,
      "answerNum": questionNum,
      "options": options,
    }

    return question
  }
}


export default getQuestion