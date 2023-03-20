import React from 'react'
import QuizBox from './QuizBox'
import ResultPage from './ResultPage'
import "./main.css"
import useGlobalContext from '../context'

function Index() {
  const { showResult, score } = useGlobalContext()
  return (
    <main>
      <h1 className='main-heading'>Country Quiz</h1>
      {showResult
        ? <ResultPage score={score} />
        : <QuizBox />}
    </main>
  )
}

export default Index
