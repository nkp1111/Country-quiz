import React, { useContext, useEffect, useState } from "react";
import getCountryData from './controller/getData'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [showResult, setShowResult] = useState(false)
  const [allCountryData, setAllCountryData] = useState([])

  // show result and retry on game over
  const showResultOnGameOver = () => {
    const nextBtn = document.querySelector(".btn")
    nextBtn.addEventListener("click", () => {
      setShowResult(!showResult)
    })
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

  return (
    <AppContext.Provider
      value={{
        showResult,
        setShowResult,
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