const reducer = (state, action) => {
  const { type, payload } = action
  if (type === "SET_QUIZ_DATA") {
    return { ...state, quizData: payload }
  }
  return state
}

export default reducer