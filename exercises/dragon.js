class Dragon {
  constructor(name, riderName, color) {
    this.name = name
    this.rider = riderName
    this.color = color
    this.hungry = true
    this.mealCount = 0
  }

  eat() {
    this.mealCount++
    if (this.mealCount >= 3) {
      this.hungry = false
    }
  }

}

module.exports = Dragon