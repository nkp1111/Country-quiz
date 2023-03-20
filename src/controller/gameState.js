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

export {
  findOption,
}