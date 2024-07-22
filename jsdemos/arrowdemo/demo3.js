function Car(){
    this.speed=0
    this.speedUp=function(speed){
        this.speed=speed
        // let self=this
        setTimeout(()=>{
            console.log(this.speed)
        },1000)
    }
}
let car= new Car()
car.speedUp(100)


function loadusers(){
    return [
        {uname:'admin', email:'admin@mail.com'},
        {uname:'manager', email:'manager@email'}
    ]
}

function findUser(uname){
    const arr=loadusers()
    for (key in arr){
        if (arr[key].uname===uname){
            console.log(arr[key].uname)
            console.log(arr[key].email)
        }
    }
}

function findUser1(uname){
    const arr=loadusers()
    const user=users.find((user)=> user.uname===uname)
    return user
}
findUser('manager')


function month(mon){
    switch(mon){
        case "January":
        case "March":
        case "May":
        case "July":
        case 'August':
        case "October":
        case "December":
            console.log("31")
            break
        case "February":
            console.log("28")
            break
        default:
            console.log(30)
    }
}