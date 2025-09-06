let person={
    name:"tej",
    age:18
}
console.log(person.name)
console.log(person["age"])
  
const{name,age}=person;

let numbers=[1,2,3,4];
let square=numbers.map((num)=>num*num);
console.log(square)

let even=numbers.filter((num)=>num%2==0);
console.log(even)

let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)

let persons=[{name:"tej",marks:50},{name:"choco",marks:70},{name:"rami",marks:80}];
for(person of persons){
    console.log(person)
}
let maxmarks=0;
let topper="";
for(let person of persons){
    if(person.marks>maxmarks){
        maxmarks=person.marks;
        topper=person,name;
    }
}


