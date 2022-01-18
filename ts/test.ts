const printName = (name:string) => 'Hi '+name;
console.log(printName("Sid"));

const printBill = (name:string, bill:number) => `Hi ${name}, please pay ${bill}` ;
console.log(printBill("sid", 100));

const person = {
    roll:32,
    username:'Sidharth',
    age:23
};

const {username, age} = person;
console.log(username);
console.log(age);