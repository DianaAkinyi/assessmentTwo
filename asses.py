
# / Implement a class called Student with attributes for name, age, and grades (a
# //     list of integers). Include methods to calculate the average grade, display the
# //     student information, and determine if the student has passed (average grade >=
# //     60). Create objects for the Student class and demonstrate the usage of these
# //     methods.
class Student:
     def__init__(self,name,age,grades)
     self.name=name
     self.age=age
     self.grades=[]

     def average(self,grades):
        return grades
     def details():
        return f"I am {self.name} and am {self.age} i scored{self.grades}"
     def studentScore():
        if grade>=60:
          return f"the child has passed"
        elif grade<=60:
          return f"The student has failled"
        
# // Create a class called Product with attributes for name, price, and quantity.
# // Implement a method to calculate the total value of the product (price * quantity).
# // Create multiple objects of the Product class and calculate their total values.

class Products:
   def__init__(self,name,price,quantity)
   self.name=name 
   self.price=price
   self.quantity=quantity
   
   def totalProduct(self,price,quantity):
      y= price*quantity
      return y
   
#    Create a LibraryCatalog class that handles the cataloging and management of
# books in a library. Implement methods to add new books, search for books by
# title or author, keep track of available copies, and display book details.
class LibraryCatalog :
   def__init__(self,title,auther,available)
     