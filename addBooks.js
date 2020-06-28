let booksBox = {
  spaces: 5,
  booksIn: 0
}

const getPluralOrSingular = (quantity, singular, plural) =>
quantity === 1 ? singular : plural

const getSAvailableSpacesMessage = (spaces, booksIn) => {
  const avaliableSpace = spaces - booksIn
    const fitPluralorSingular =
    getPluralOrSingular(avaliableSpace, 'cabe', 'cabem')
    const bookPluralOrSingular =
    getPluralOrSingular(avaliableSpace, 'livro', 'livros')
    return `Só ${fitPluralorSingular} mais ${spaces - booksIn} ${bookPluralOrSingular}`
}

booksBox.addBooks = booksQuantity => {
  const { spaces } = booksBox
  const isBoxFilled = booksBox.booksIn === spaces
  const boxSpacesAreNotEnough = booksBox.booksIn + booksQuantity > spaces

  if (isBoxFilled) {
    return 'A caixa já está cheia'
  }

  if (boxSpacesAreNotEnough) {
    return getSAvailableSpacesMessage(spaces, booksBox.booksIn)
  }

  booksBox.booksIn += booksQuantity

  const bookPluralOrSingular = getPluralOrSingular(booksBox.booksIn, 'livro','livros')
  return `Já há ${booksBox.booksIn} ${bookPluralOrSingular} na caixa`
}

// console.log(booksBox.addBooks(1))
console.log(booksBox.addBooks(4))
console.log(booksBox.addBooks(3))
// console.log(booksBox.addBooks(4))
console.log(booksBox)
