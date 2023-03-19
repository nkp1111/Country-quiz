import React from 'react'

function buttonHolder({ btnText = "Submit", btnClass = "" }) {
  return (
    <div className="btn-holder">
      <button className={`btn ${btnClass}`}>{btnText}</button>
    </div>
  )
}

export default buttonHolder
