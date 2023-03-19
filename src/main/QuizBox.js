import React from 'react'
import AdventureImage from '../assets/undraw_adventure_4hum 1.svg'
import ButtonHolder from '../components/buttonHolder'
import ImageHolder from '../components/imageHolder'
import useGlobalContext from '../context'
import OptionBox from './OptionBox'

function QuestionBox() {

  const { quizData } = useGlobalContext()

  return (
    <section className='question-box-section'>
      <h2 className='question'>This is where the question will go?</h2>
      <OptionBox />
      {/* button holder next button  */}
      <ButtonHolder btnText="Next" />
      {/* image holder  */}
      <ImageHolder image={AdventureImage}
        altText="game on" />
    </section>
  )
}

export default QuestionBox
