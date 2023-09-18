import BooksImg01 from "../../pages/Books/images/bookImg01.svg"
import BooksImg02 from "../../pages/Books/images/bookImg02.svg"
import BooksImg03 from "../../pages/Books/images/bookImg03.svg"

export const booksTranslate = {
    type: [
      { userType: "Aluno", amountOfBooks: 3,
        img: [BooksImg01, BooksImg02, BooksImg03] },
      { userType: "Professor",  amountOfBooks: 1, 
        img: [BooksImg01, BooksImg02, BooksImg03, BooksImg01] },
      { userType: "Coordenador",  amountOfBooks: 2, 
        img: [BooksImg01, BooksImg02, BooksImg03, BooksImg01, BooksImg02] },
      { userType: "Colaborador",  amountOfBooks: 1, 
        img: [BooksImg01]},
    ],
    title: ["Livros", "Books", "Libros"],
    languageCurrent: ["Atual", "Current", "Actual"],
    languagePrevious: ["Anterior", "Previous", "Anterior"],
    img: [BooksImg01, BooksImg02, BooksImg03],
}
