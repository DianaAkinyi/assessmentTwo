// 1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.



// Implement a class called Student with attributes for name, age, and grades (a
//     list of integers). Include methods to calculate the average grade, display the
//     student information, and determine if the student has passed (average grade >=
//     60). Create objects for the Student class and demonstrate the usage of these
//     methods.

class Student{
     constructor(name,age,grades){
        this.name=name
        this.age=age
        this.grades=grades
     }
    //  averageAge(grades){
    //     const grades=[12,34,56,78,90]
    //     sum=0
    //     for (let i=0;i>length.grades,i++){
            
    //  }
     studentDetails(){
        console.log("The student called ${name} is ${age} and she scored${grades}")

     }
     studentScores(grades){

     }
     student= new Student("Kelly","12","[23,34,56,78,90]")
}

console.log(this.student.Student())
console.log(this.student.averageAge())
console.log(this.student.studentDetails())
console.log(this.student.studentScores())

// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
 class Products{
    constructor(names,price,quantity){
        this.names=names
        this.price=price
        this.quantity=quantity
    }
    totalValue(){
        const total=(this,names)*(this.price)
        console.log(total)
    }
    products=new Products("Table",23445,7)
    products1=new Products("Chair",3456,8)
    products2=new Products("Laptop",1235667,789)
    products3 =new Products("Phone",52478,56)
}
 console.log(this.products)
 
//  Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.
class LibraryCatalog{
    constructor(title,author,availability){
        this.title=title
        this.author=author
        this.availability=!availability

    }
    addNewBook(title,author){

    }
    getBook(author){
        if(author===author){
            console.log("This is the book")
        }
        else{
            console.log("Book not found")
        }

    }
    bookDetails(){
        console.log("The book am loking for is ${title}and the author is ${author} and it is ${!available}")
    }
    isAvailabe(availability){
if(availability===!availability){
    console.log("The book is not available")

}
else{
    console.log("The book is available");
}
    }
    book=new LibraryCatalog("The Job Search","John Bowell",true)
}
console.log(this.book)
console.log(this.book.LibraryCatalog())
console.log(this.book.bookDetails())
console.log(this.getBook())
console.log(this.addNewBook());