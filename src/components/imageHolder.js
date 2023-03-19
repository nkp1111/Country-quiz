import React from 'react'

function imageHolder({ image = "", altText = "" }) {
  return (
    <div className="img-holder">
      <img src={image} alt={altText} />
    </div>
  )
}

export default imageHolder
