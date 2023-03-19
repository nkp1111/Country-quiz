import React, { useContext, useEffect, useState } from "react";
import { getCountryData, getQuizData } from './controller/getData'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [showResult, setShowResult] = useState(false)
  const [allCountryData, setAllCountryData] = useState([])
  const [quizData, setQuizData] = useState([])

  // show result and retry on game over
  const showResultOnGameOver = () => {
    const nextBtn = document.querySelector(".btn")
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        setShowResult(!showResult)
      })
    }
  }

  // set all country data 
  const handleCountryData = async () => {
    let data = await getCountryData()
    if (data) {
      setAllCountryData(data)
    }
  }

  // useEffects for calling functions 
  useEffect(() => {
    showResultOnGameOver()
  })

  useEffect(() => {
    handleCountryData()
  }, [])

  // get random quiz data
  const handleQuizData = () => {
    if (allCountryData) {
      let data = getQuizData({ countryData: allCountryData })
      setQuizData(data)
    }
  }

  useEffect(() => {
    handleQuizData()
  }, [allCountryData])

  console.log(quizData);

  return (
    <AppContext.Provider
      value={{
        showResult,
        setShowResult,
        quizData,
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