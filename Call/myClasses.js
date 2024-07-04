//ES6

// class User{
//   constructor(username,email,password,contact,address){
//     this.username=username;
//     this.email=email;
//     this.password=password;
//     this.contact=contact;
//     this.address=address;
//   }

//   encryptPassword(){
//     return `${this.password}abc`
//   }

//   chnageUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const Engg = new User("Engg", "triveni.u@google.com" ,"123")

// console.log(Engg.encryptPassword());
// console.log(Engg.chnageUsername());


function User(username,email,password,contact,address){

  this.username=username;
  this.email=email;
  this.password=password;
  this.contact=contact;
  this.address=address;

}

User.prototype.encryptPassword=function(){
  return `${this.password}abc`
}
User.prototype.encryptPassword=function(){
   return `${this.username.toUpperCase()}`
}

const doctor=new User("doctor","aiims@health.com","123","8419024111","varanasi")

console.log(doctor.encryptPassword());
console.log(doctor.chnageUsername());

