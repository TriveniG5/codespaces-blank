class User{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`USERNAME IS ${THIS.username}`);
  
  }
}



class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const triveni = new Teacher("dhruva","abc@g.com","123")

triveni.logMe()

const masalaChai= new User("masalaChai")
masalaChai.logMe();

console.log(triveni instanceof Teacher);
//triveni.addCourse()