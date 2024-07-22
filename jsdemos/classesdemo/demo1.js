class Person{
    constructor(name){
        this.setName(name)
    }
    getName(){
        return this.name
    }
    setName(newName){
        newName=newName.trim()
        if(newName==='')
        {
            throw 'The name cannot be empty'
        }
        this.name=newName
    }
}
let newPerson=new Person('admin')
console.log(newPerson)

newPerson.setName("Manager")
console.log(newPerson)