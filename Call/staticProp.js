class User{
  constructor(username){
    this.username=username
  }

  logMe(){
    console.log(`Username: ${this.username}`);
  }

  static createId(){
    return `123`
  } 
}

const triveni=new User("triveni")
// console.log(triveni.createId())

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email=email
  }
}

const iphone =new Teacher("iphone","abc@123.com")

iphone.logMe();
