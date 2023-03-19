import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [showResult, setShowResult] = useState(false)

  // show result and retry on game over
  const showResultOnGameOver = () => {
    const nextBtn = document.querySelector(".btn")
    nextBtn.addEventListener("click", () => {
      setShowResult(!showResult)
    })
  }

  useEffect(() => {
    showResultOnGameOver()
  })

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