import React from 'react'

function QuestionBox() {
  const answerList = ["a", "b", "c", "d"]
  return (
    <section>
      <h2 className='question'>This is where the question will go?</h2>
      <div className="options">
        {answerList.map((item, ind) => {
          return (
            <div className={`option option-${ind}`}>
              <span>{answerList[ind]}</span>
              <span className='option-text'> dummy option {item}</span>
            </div>
          )
        })}
      </div>
      <div className="btn-holder">
        <button className="btn">Next</button>
      </div>
    </section>
  )
}

export default QuestionBox
