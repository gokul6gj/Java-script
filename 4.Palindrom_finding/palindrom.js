let name =prompt("Enter :")
// let name_2 =(name)
// console.log(name_2)
let name_1 =name.split('').reverse().join('')
let final_name =name_1
if (final_name==name){
    console.log(name + " is Palindrome")
}
else {
    console.log(name + " is Not a Palindrome")
}