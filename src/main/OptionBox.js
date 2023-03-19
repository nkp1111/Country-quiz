import React from 'react'

function OptionBox({ options, answerNum }) {

  const answerList = ["a", "b", "c", "d"]
  return (
    <div className="options">
      {options && options.map((option, ind) => {
        return (
          <div className={`option option-${ind}`} key={ind}>
            <span>{answerList[ind]}</span>
            <span className='option-text'>{option}</span>
          </div>
        )
      })}
    </div>
  )
}

export default OptionBox
