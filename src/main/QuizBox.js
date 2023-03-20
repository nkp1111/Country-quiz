import React from 'react'
import AdventureImage from '../assets/undraw_adventure_4hum 1.svg'
import ButtonHolder from '../components/buttonHolder'
import ImageHolder from '../components/imageHolder'
import useGlobalContext from '../context'
import OptionBox from './OptionBox'
import QuestionBox from './QuestionBox'

function QuizBox() {

  const { quizData, showAnswer } = useGlobalContext()
  const { countryCode, question, answerNum, options } = quizData

  return (
    <section className='question-box-section'>
      {/* question  */}
      <QuestionBox countryCode={countryCode}
        question={question}
        ImageHolder={ImageHolder} />
      {/* options  */}
      <OptionBox options={options}
        answerNum={answerNum}
        ImageHolder={ImageHolder} />
      {/* button holder next button  */}
      {showAnswer && <ButtonHolder btnText="Next" />}
      {/* image holder  */}
      <ImageHolder image={AdventureImage}
        altText="game on" />
    </section>
  )
}

export default QuizBox
