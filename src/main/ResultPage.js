import React from 'react'
import WinnerImage from '../assets/undraw_winners_ao2o 2.svg'
import ButtonHolder from '../components/buttonHolder'
import ImageHolder from '../components/imageHolder'

function ResultPage({ score }) {
  return (
    <section className='result-section'>
      <div className="content">
        <h2>Results</h2>
        <p className="final-score">
          You got <span className='correct'>{score}</span> correct answers
        </p>
      </div>
      {/* button holder next button  */}
      <ButtonHolder btnText="Try Again" />
      {/* image holder  */}
      <ImageHolder image={WinnerImage}
        altText="game over" />
    </section>
  )
}

export default ResultPage
