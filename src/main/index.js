import React from 'react'
import QuizBox from './QuizBox'
import ResultPage from './ResultPage'
import "./main.css"
import useGlobalContext from '../context'

function Index() {
  const { showResult } = useGlobalContext()
  return (
    <main>
      <h1 className='main-heading'>Country Quiz</h1>
      {showResult
        ? <ResultPage />
        : <QuizBox />}
    </main>
  )
}

export default Index
