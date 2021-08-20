const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['D', 'B', 'B', 'A']

let score = 0

const getUserAnswers = () => {
  let userAnswers = []

  correctAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })

  return userAnswers
}

const calculateUserScore = userAnswers => {
  userAnswers.forEach((answer, index) => {
    const isUserAnswerCorrect = answer === correctAnswers[index]

    if (isUserAnswerCorrect) {
      score += 25
    }
  })
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  finalScoreContainer.classList.remove('d-none')
}
