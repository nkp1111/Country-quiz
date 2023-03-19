import React, { useContext } from "react";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        first: "a"
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