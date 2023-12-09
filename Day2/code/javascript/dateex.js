let today = new Date()

console.log(today)

console.log(today.getDate(),"-",today.getMonth()+1,"-",today.getFullYear())

console.log(today.getDay())

let indDay = new Date(2024,7,15)
console.log(indDay.getDay())

let yearEnd = new Date(2023,12,31)
console.log(yearEnd.getDay())


let birthDate = new Date(2000,5,15)

let diff = today - birthDate
console.log(diff,"ms")
let days=diff/(1000*60*60*24);
console.log(days);












