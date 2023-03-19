import React from 'react'

function OptionBox() {

  const answerList = ["a", "b", "c", "d"]
  return (
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
  )
}

export default OptionBox
