import React, { useContext, useEffect, useState, useReducer } from "react";
import { getCountryData, getQuizData } from './controller/getData'
import { findOption } from './controller/gameState'
import reducer from './reducer'

const AppContext = React.createContext()

const defaultState = {
  quizData: [],
  score: 0,
  showAnswer: false,
  answeredCorrectly: true,
  chosenAnswer: -1,
  showResult: false,
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, defaultState)
  const [allCountryData, setAllCountryData] = useState([])

  // set all country data 
  const handleCountryData = async () => {
    let data = await getCountryData()
    if (data) {
      setAllCountryData(data)
    }
  }

  useEffect(() => {
    handleCountryData()
  }, [])


  // get random quiz data
  const handleQuizData = () => {
    if (allCountryData) {
      let data = getQuizData({ countryData: allCountryData })
      dispatch({ type: "SET_QUIZ_DATA", payload: data })
    }
  }

  useEffect(() => {
    handleQuizData()
  }, [allCountryData])


  //////////////////////////////////////////////////////
  // functions for answer check 
  // check answer 
  const correctAnswerMark = (options, correctAnswer) => {
    // add class for highlighting the correct answer
    if (state.quizData.question) {
      const correctOption = "option-" + correctAnswer
      if (options) {
        options.forEach(option => {
          if (option.classList.contains("correct")) {
            option.classList.remove("correct")
          }
          if (option.classList.contains(correctOption)) {
            option.classList.add("correct")
          }
        })
      }
    }
  }

  const checkAnswer = (e, options) => {
    // function: check answer, manage score and highlight answers

    let alreadyChosen = false
    options.forEach(option => {
      if (option.classList.contains("chosen")) {
        alreadyChosen = true
      }
    })

    if (!alreadyChosen) {
      // add highlight for chosen option
      e.currentTarget.classList.add("chosen")
    }

    setTimeout(() => {
      // add highlight for answers, increase score
      if (state.quizData.question) {
        correctAnswerMark(options, state.quizData.answerNum)
        let answers = findOption()
        dispatch({ type: "UPDATE_ANSWER_CHOSEN", payload: answers.chosen })
        if (answers.chosen === answers.correct) {
          dispatch({ type: "INCREASE_SCORE", payload: state.score + 1 })
        } else {
          dispatch({ type: "FALSE_ANSWER", payload: false })
        }
        dispatch({ type: "SHOW_HIDE_ANSWER" })
      }
    }, 100)
  }

  const handleAnswer = () => {
    // add eventlistener for all options to check answer

    const options = document.querySelectorAll(".option")
    options.forEach(option => {
      option.addEventListener("click", (e) => checkAnswer(e, options))
    })
  }

  useEffect(() => {
    handleAnswer()
    console.log(state);
  })

  //////////////////////////////////////////////////////


  return (
    <AppContext.Provider
      value={{
        ...state
      }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook to call AppContext 
const useGlobalContext = () => useContext(AppContext)

export {
  AppProvider
}

export default useGlobalContext