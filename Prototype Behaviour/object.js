function multipleBy5(num){
  return num*5
}

multipleBy5.power=2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
  this.username= username
  this.score= score
}

createUser.prototype.increment = function(){
  this.score++
}
createUser.prototype.printMe= function(){
  console.log(`price is ${this.score}`);
}
const coffee = new createUser("chai", 25)
const tea =    new createUser("coffee",250)

tea.printMe()

//Prototype in JS

// let myName="Triveni          "
// let mySpouse="Priyambada"

// console.log(myName.trueLength);

let myHeros=["thor","spiderman","batman","flash","ironman"]

let heroPower={
  thor:"hammer",
  spiderman: "Spidernet",
  batman: "like bat",
  flash: "speed",
  ironman: "technology",

  getSpiderPower: function(){
console.log(`Spider  power is ${this.spiderman}`);
  }
}

Object.prototype.hitesh=function(){
  console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh=function(){
  console.log(`Hitesh says hello`);
}
  

//heroPower.hitesh();

myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh()



//inheritance

const user={
  name: "Dhruv",
  email: "dhruva@google.com"
}

const Teacher={
  makeVideo: true
}

const TeachingSupport={
  isAvailable:false
}

const TASupport={
makeAssignment: `JS Assignment`,
fullTime: true,
__proto__:TeachingSupport
}

Teacher.__proto__=user

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="DhuvaBeta"

String.prototype.trueLength=function(){
  console.log(`${this}`);
  
  console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


