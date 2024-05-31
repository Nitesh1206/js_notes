const num = [1, 2, 3, 4, 5, 6, 7, 8]

const newNum = num.filter((item) => {
   return  item > 5
})
console.log(newNum);


// above task using forEach

const anotherNum = []

num.forEach( (item) => {
    if(item >= 5){
        anotherNum.push(item)
    }
})
console.log(anotherNum);

// some more excercise of filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const publishedBooks = books.filter((bk) => {
    return bk.publish < 2000 && bk.genre === "Non-Fiction"
})
    console.log(publishedBooks);

    const bookArr = []
    for (const i of publishedBooks) {
        if(i.publish <= 1990){
            bookArr.push(i.publish)
        }
    }

    console.log(bookArr);