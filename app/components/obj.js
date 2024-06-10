const Person={
  name: "Amaka",
  surname: "Peter",
  age: 33,
  state: "Delta"

}

if (Person.age > 20) {
    console.log(Person.name)
} else {
    console.log(Person.state)
}
 let result = Person.age > 20 ? 
 "Person.surname" : "Person.state"
 console.log(result)