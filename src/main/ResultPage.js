import React from 'react'
import WinnerImage from '../assets/undraw_winners_ao2o 2.svg'

function ResultPage() {
  return (
    <section className='result-section'>
      <div className="content">
        <h2>Results</h2>
        <p className="final-score">
          You got <span className='correct'>4</span> correct answers
        </p>
      </div>
      <div className="img-holder">
        <img src={WinnerImage} alt="game over" />
      </div>
      <div className="btn-holder">
        <button className="btn">Try again</button>
      </div>
    </section>
  )
}

export default ResultPage
