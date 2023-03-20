import React from 'react'
import useGlobalContext from '../context'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'

function OptionBox({ options, answerNum }) {

  const answerList = ["a", "b", "c", "d"]
  const { showAnswer, chosenAnswer, answeredCorrectly } = useGlobalContext()
  return (
    <div className="options">
      {options && options.map((option, ind) => {
        return (
          <div className={`option option-${ind}`} key={ind}>
            <span>{answerList[ind]}</span>
            <span className='option-text'>{option}</span>

            {/* if answer is right  */}
            {showAnswer && answerNum === ind
              ? <div className="ms-auto">
                <AiOutlineCheckCircle className='options-icons' />
              </div>
              // if answer is wrong 
              : showAnswer && !answeredCorrectly && chosenAnswer === ind
                ? <div className='ms-auto'>
                  <AiOutlineCloseCircle className='options-icons' />
                </div>
                // else 
                : null}
          </div>
        )
      })}
    </div>
  )
}

export default OptionBox
