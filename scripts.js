/*
const filterButtons = document.querySelectorAll(".filterbutton")
const filterDishes = document.querySelectorAll(".filterdish")
console.log(filterButtons, filterDishes)

function filterDish() {
  filterButtons.forEach(button => {
    button.classList.remove("font-semibold")
    button.classList.remove("underline")
  })
  this.classList.add("font-semibold")
  this.classList.add("underline")
  console.log(this.dataset.filter)
  filterDishes.forEach(dish => {
    if (dish.classList.contains(this.dataset.filter)){
      dish.classList.remove("hidden")
    } else {
      dish.classList.add("hidden")
    }
  })
}

filterButtons.forEach(button => {
  
  button.addEventListener("click", filterDish
)})