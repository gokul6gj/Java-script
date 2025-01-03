
console.log('gokul')
let user = {
    name: "gokul",
    id:1,
    username(){
        console.log("login")
    },
    password(){
        console.log("password")

    }
}
console.log(user)
user.username()
user.password("hello")
user.id=12
console.log(user.id)
