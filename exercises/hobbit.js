class Hobbit {
  constructor(name) {
    this.name = name
    this.hasRing = name === 'Frodo'
    this.age = 0
    this.adult = false
    this.old = false
    this.disposition = 'homebody'
    this.isShort = true
  }

  celebrateBirthday() {
    this.age++

    if (this.age >= 33) {
      this.adult = true
    }
    if (this.age >= 101) {
      this.old = true
    }
  }
}

module.exports = Hobbit