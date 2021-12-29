const formAddToDo = document.querySelector('.form-add-todo')
const inputSearchToDo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addTodo = inputValue => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
      <li
        class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}"
      >
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>
    `
  }
}

formAddToDo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  addTodo(inputValue)
  event.target.reset()
})

const removeTodo = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash
  const toDo = document.querySelector(`[data-todo="${trashDataValue}"]`)

  if (trashDataValue) {
    toDo.remove()
  }
}

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  removeTodo(clickedElement)
})

const filterToDos = (toDos, inputValue, returnMatchedToDos) =>
  toDos.filter(toDo => {
    const matchedToDos = toDo.textContent.toLowerCase().includes(inputValue)

    return returnMatchedToDos ? matchedToDos : !matchedToDos
  })

const manipulateClasses = (toDos, classToAdd, classToRemove) => {
  toDos.forEach(toDo => {
    toDo.classList.remove(classToRemove)
    toDo.classList.add(classToAdd)
  })
}

const hideToDos = (toDos, inputValue) => {
  const toDosToHide = filterToDos(toDos, inputValue, false)
  manipulateClasses(toDosToHide, 'hidden', 'd-flex')
}

const showToDos = (toDos, inputValue) => {
  const toDosToShow = filterToDos(toDos, inputValue, true)
  manipulateClasses(toDosToShow, 'd-flex', 'hidden')
}

inputSearchToDo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const toDos = Array.from(todosContainer.children)

  hideToDos(toDos, inputValue)
  showToDos(toDos, inputValue)
})
