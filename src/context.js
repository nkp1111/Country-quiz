import React, { useContext, useEffect, useState, useReducer } from "react";
import { getCountryData, getQuizData } from './controller/getData'
import reducer from './reducer'

const AppContext = React.createContext()

const defaultState = {
  quizData: [],
  score: 0,
  showAnswer: false,
  correctAnswer: false,
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