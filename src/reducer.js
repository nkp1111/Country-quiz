const reducer = (state, action) => {
  const { type, payload } = action

  if (type === "SET_QUIZ_DATA") {
    return { ...state, quizData: payload }
  }
  else if (type === "INCREASE_SCORE") {
    return { ...state, score: payload }
  }
  else if (type === "FALSE_ANSWER") {
    return { ...state, correctAnswer: payload }
  }
  else if (type === "SHOW_HIDE_ANSWER") {
    let oldAnswerState = state.showAnswer
    return { ...state, showAnswer: !oldAnswerState }
  }
  else {
    throw new Error("Unknown Action type. Please check for misspell")
  }

}

export default reducer