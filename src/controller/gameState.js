const findOption = () => {
  const options = document.querySelectorAll(".option")
  let ans = {}
  options.forEach((option, ind) => {
    if (option.classList.contains("chosen")) {
      ans["chosen"] = ind
    }
    if (option.classList.contains("correct")) {
      ans["correct"] = ind
    }
  })
  return ans
}

const removeHighlight = () => {
  const options = document.querySelectorAll(".option")
  options.forEach(option => {
    if (option.classList.contains("chosen")) {
      option.classList.remove("chosen")
    }
    if (option.classList.contains("correct")) {
      option.classList.remove("correct")
    }
  })
}

export {
  findOption,
  removeHighlight,
}