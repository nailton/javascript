class Cat{
  constructor (name) {
    this.name = name
  }

  getName (){
    return this.name
  }
}

const myCat = new Cat('Alfredo')
console.log(myCat.getName())

const createCat = name => ({
  name,
  getName: () => name
})

const myCat2 = createCat('Alfredão')
console.log(myCat2.getName())
