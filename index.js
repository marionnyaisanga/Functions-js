
function stringLength(string){
    string =string.map(text => text.length)
    return string
}
let string= ["apple","mango","grapes"]
console. log(stringLength(string))

function filter(even){
even = even.filter(number=>number %2 ===0)
return even
}
let even = [9,8,7,6,5,4,3,2,1]
console.log(filter(even));

function score(names){
    students = students.filter(name => name.score >75)
    students =students.map(name => name.name)
    return students

}
let students =[
    {name:"mary",score:75},
    {name:"John",score:80},
    { name:" peter",score:60},
]
console.log(score(students));

function square(num){
    num =num.map(number=>number*number)
    return num
}
let num = [5,7,9]
console.log(square(num));



function mixedArray(array){
    let newArray=array.filter(item=> typeof item === "string")
    
    return newArray.map(element => element.toUpperCase());
}
let array2= [2,"house",90,"cat",true]
console.log(mixedArray(array2));


