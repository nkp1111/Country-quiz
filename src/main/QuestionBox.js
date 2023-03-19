import React from 'react'
import AdventureImage from '../assets/undraw_adventure_4hum 1.svg'

function QuestionBox() {
  const answerList = ["a", "b", "c", "d"]
  return (
    <section className='question-box-section'>
      <h2 className='question'>This is where the question will go?</h2>
      <div className="options">
        {answerList.map((item, ind) => {
          return (
            <div className={`option option-${ind}`} key={ind}>
              <span>{answerList[ind]}</span>
              <span className='option-text'> dummy option {item}</span>
            </div>
          )
        })}
      </div>
      <div className="btn-holder">
        <button className="btn">Next</button>
      </div>
      <div className="img-holder">
        <img src={AdventureImage} alt="game on" />
      </div>
    </section>
  )
}

export default QuestionBox
