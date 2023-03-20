import React from 'react'

function QuestionBox({ question, countryCode, ImageHolder }) {

  let image = `https://flagcdn.com/80x60/${countryCode}.png`

  return (
    <div className={`question-box 
    ${countryCode ? "d-flex flex-column-reverse" : ""}`}>
      <h2 className='question'>{question}</h2>
      {countryCode &&
        <ImageHolder image={image} altText="flag" />}
    </div>
  )
}

export default QuestionBox
